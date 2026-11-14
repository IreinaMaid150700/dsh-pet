/**
 * 「AI 服务商」面板：独立模式自己的模型接入配置（协议、地址、模型、密钥、测试连接与删除密钥）。
 *
 * 读写独立模式专属的 /standalone-ai/settings，与插件配置那份文件互不相干；
 * 密钥只写不回显，请求一律带本次运行的访问令牌。AI 是否可用只看地址、模型与密钥是否齐全。
 * @module dsh-pet/src/standalone/settings-page/script/ai
 */

/** 生成 AI 面板片段。 */
export function aiScript(): string {
  return `
const AI_SETTINGS_URL = '/standalone-ai/settings';
const AI_TEST_URL = '/standalone-ai/test';
const AI_BALANCE_URL = '/standalone-ai/balance';

async function aiRequest(method, body) {
  const response = await fetch(AI_SETTINGS_URL, {
    method: method,
    credentials: 'same-origin',
    cache: 'no-store',
    redirect: 'error',
    headers: body
      ? { 'X-DSH-Pet-Token': TOKEN, 'Content-Type': 'application/json' }
      : { 'X-DSH-Pet-Token': TOKEN },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!response.ok) {
    if (response.status === 403) throw new Error('Phiên mở cài đặt đã hết hạn. Hãy mở lại cài đặt từ menu thú cưng.');
    if (response.status === 429) throw new Error('Lưu quá nhiều lần, chờ một phút rồi thử lại.');
    throw new Error('Chưa lưu được. Kiểm tra địa chỉ API, tên model và khóa rồi thử lại.');
  }
  return response.json();
}

function populateAi(data) {
  if (data.protocol !== undefined && protocolSelect) protocolSelect.setValue(String(data.protocol));
  for (const id of ['baseUrl', 'model']) {
    if (data[id] !== undefined && byId(id)) byId(id).value = String(data[id]);
  }
  if (data.balanceProvider !== undefined && balanceSelect) balanceSelect.setValue(String(data.balanceProvider));
  byId('balance-btn').disabled = !balanceSelect || balanceSelect.getValue() === '';
  byId('key-state').textContent = data.hasKey ? 'Đã lưu · không hiển thị lại' : 'Chưa thiết lập';
  byId('key-actions').hidden = data.hasKey !== true;
  byId('apiKey').value = '';
  byId('apiKey').disabled = false;
  byId('deepseek-key-state').textContent = data.hasDeepseekKey ? 'Đã lưu · không hiển thị lại' : 'Chưa thiết lập';
  byId('deepseek-key-actions').hidden = data.hasDeepseekKey !== true;
  byId('deepseekApiKey').value = '';
  byId('deepseekApiKey').disabled = false;
}

/** 把余额结果翻成一行可读文案；失败一律说明原因，不显示伪造数字。 */
function describeBalance(data) {
  if (!data || data.ok !== true) {
    if (data && data.reason === 'credential-missing') return 'Thiếu khóa: hãy lưu API key của nhà cung cấp đã chọn trước.';
    if (data && data.reason === 'unsupported') return 'Nhà cung cấp này không hỗ trợ xem số dư.';
    return data && data.message ? 'Truy vấn thất bại: ' + data.message : 'Truy vấn thất bại, thử lại sau.';
  }
  const payload = data.data || {};
  if (data.shape === 'money' && payload.wallets) {
    return payload.wallets
      .map(function (wallet) {
        return wallet.currency + ' ' + wallet.total;
      })
      .join(' / ');
  }
  if (data.shape === 'points') return payload.total + ' ' + payload.unit;
  if (data.shape === 'windows') return 'Đã dùng trong tháng ' + payload.monthly + '%';
  return 'Đã lấy được số dư.';
}

function wireBalanceQuery() {
  const button = byId('balance-btn');
  const result = byId('balance-result');
  button.addEventListener('click', async () => {
    button.disabled = true;
    result.className = 'status';
    result.dataset.ok = '';
    result.dataset.error = '';
    result.textContent = 'Đang xem số dư…';
    try {
      const response = await fetch(AI_BALANCE_URL, {
        method: 'POST',
        credentials: 'same-origin',
        cache: 'no-store',
        headers: { 'X-DSH-Pet-Token': TOKEN },
      });
      if (!response.ok) throw new Error('Truy vấn bị từ chối (HTTP ' + response.status + '）');
      const data = await response.json();
      const ok = data && data.ok === true;
      if (ok) result.dataset.ok = 'true';
      else result.dataset.error = 'true';
      result.textContent = (ok ? '✓ ' : '✗ ') + describeBalance(data);
    } catch (error) {
      result.dataset.error = 'true';
      result.textContent = '✗ ' + (error && error.message ? error.message : String(error));
    } finally {
      button.disabled = !balanceSelect || balanceSelect.getValue() === '';
    }
  });
}

function wireKeyDelete(status) {
  byId('key-delete').addEventListener('click', async () => {
    const confirmed = await confirmDialog({
      title: 'Xóa khóa đã lưu',
      text: 'Xóa xong thú cưng không gọi được model nữa, phải nhập lại khóa mới dùng lại được.',
      confirmLabel: 'Xóa',
      danger: true,
    });
    if (!confirmed) return;
    setStatus(status, 'Đang xóa khóa…');
    try {
      populateAi(await aiRequest('POST', { clearApiKey: true }));
      setStatus(status, 'Đã xóa khóa đã lưu.', 'ok');
    } catch (error) {
      setStatus(status, error && error.message ? error.message : String(error), 'error');
    }
  });
}

function wireDeepseekKeyDelete(status) {
  byId('deepseek-key-delete').addEventListener('click', async () => {
    const confirmed = await confirmDialog({
      title: 'Xóa khóa giọng nói đã lưu',
      text: 'Xóa xong giọng nói DeepSeek sẽ không dùng được cho tới khi nhập lại khóa.',
      confirmLabel: 'Xóa',
      danger: true,
    });
    if (!confirmed) return;
    setStatus(status, 'Đang xóa khóa giọng nói…');
    try {
      populateAi(await aiRequest('POST', { clearDeepseekKey: true }));
      setStatus(status, 'Đã xóa khóa giọng nói đã lưu.', 'ok');
    } catch (error) {
      setStatus(status, error && error.message ? error.message : String(error), 'error');
    }
  });
}

function wireTest(testBtn, testResult) {
  testBtn.addEventListener('click', async () => {
    testBtn.disabled = true;
    testResult.className = 'status';
    testResult.textContent = 'Đang thử kết nối, chờ chút…';
    const input = {
      protocol: protocolSelect ? protocolSelect.getValue() : 'openai-compatible',
      baseUrl: byId('baseUrl').value.trim(),
      model: byId('model').value.trim(),
      apiKey: byId('apiKey').value.trim(),
    };
    try {
      const response = await fetch(AI_TEST_URL, {
        method: 'POST',
        credentials: 'same-origin',
        cache: 'no-store',
        headers: { 'X-DSH-Pet-Token': TOKEN, 'Content-Type': 'application/json' },
        body: JSON.stringify(input),
      });
      const data = await response.json();
      if (data.ok) {
        testResult.className = 'status';
        testResult.dataset.ok = 'true';
        testResult.textContent = '✓ ' + data.message;
        if (data.reply) testResult.textContent += '; trả lời: ' + data.reply;
      } else {
        testResult.className = 'status';
        testResult.dataset.error = 'true';
        testResult.textContent = '✗ ' + (data.message || data.error || 'Thử thất bại');
      }
    } catch (error) {
      testResult.className = 'status';
      testResult.dataset.error = 'true';
      testResult.textContent = '✗ Request lỗi: ' + (error && error.message ? error.message : String(error));
    } finally {
      testBtn.disabled = false;
    }
  });
}

function wireSave(form, save, status) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    save.disabled = true;
    setStatus(status, 'Đang lưu vào máy…');
    const input = {
      protocol: protocolSelect ? protocolSelect.getValue() : 'openai-compatible',
      baseUrl: byId('baseUrl').value.trim(),
      model: byId('model').value.trim(),
      balanceProvider: balanceSelect ? balanceSelect.getValue() : '',
      apiKey: byId('apiKey').value,
      deepseekApiKey: byId('deepseekApiKey').value,
    };
    byId('apiKey').value = '';
    byId('deepseekApiKey').value = '';
    try {
      populateAi(await aiRequest('POST', input));
      setStatus(status, 'Đã lưu vào máy.', 'ok');
    } catch (error) {
      setStatus(status, error && error.message ? error.message : String(error), 'error');
    } finally {
      save.disabled = false;
    }
  });
}

function wireAiPanel() {
  wireModelPicker();
  const status = byId('status');
  wireKeyDelete(status);
  wireDeepseekKeyDelete(status);
  wireTest(byId('test-btn'), byId('test-result'));
  wireBalanceQuery();
  wireSave(byId('settings'), byId('save'), status);
}
`;
}
