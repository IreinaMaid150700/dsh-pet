/**
 * 「桌宠配置」面板的全局部分：开关、语音、外观、物理、移动端、对话模型与落盘位置。
 *
 * 全部读写 state.globals（main 条目的全局字段），由 ./pets 的保存一并提交。
 * 卡片按 builder 数组返回，渲染时机由 ./pets 决定——这里不自己找容器。
 * @module dsh-pet/src/standalone/settings-page/script/globals
 */

/** 生成全局卡片片段。 */
export function globalsScript(): string {
  return `
function globalCards() {
  return [globalFlagsCard, voiceCard, fontCard, physicsCard, motionCard, modelCard, advancedCard];
}

function setGlobal(key, value) {
  state.globals[key] = value;
}

function globalFlagsCard() {
  const g = state.globals;
  return card('Công tắc chung', 'Áp dụng cho mọi thú cưng; ghi vào máy ngay khi lưu.', [
    toggleRow('g-notify', 'Thông báo hệ thống', 'Hiện thông báo hệ thống khi trò chuyện xong, tạo câu thất bại, xin cấp quyền…', g.notificationsEnabled, (value) => setGlobal('notificationsEnabled', value)),
    toggleRow('g-notify-focused', 'Báo cả khi đang mở', 'Vẫn hiện thông báo và đọc trạng thái làm việc khi trang này đang mở ở phía trước. Mặc định tắt.', g.notifyWhenFocused, (value) => setGlobal('notifyWhenFocused', value)),
    toggleRow('g-click', 'Âm thanh khi bấm', 'Phát âm thanh có sẵn khi bấm vào thú cưng.', g.clickSoundEnabled, (value) => setGlobal('clickSoundEnabled', value)),
    toggleRow('g-whisper-image', 'Ảnh khi lẩm bẩm', 'Cho model chọn một ảnh meme khi lẩm bẩm.', g.whisperImageEnabled, (value) => setGlobal('whisperImageEnabled', value)),
    toggleRow('g-chat-image', 'Ảnh khi chat', 'Khi chat, gửi danh sách ảnh meme để model chọn ảnh hợp ngữ cảnh.', g.chatImageEnabled, (value) => setGlobal('chatImageEnabled', value)),
    toggleRow('g-chat-anim', 'Động tác khi chat', 'Khi chat, cho model chọn một động tác để thú cưng diễn luôn.', g.chatAnimationEnabled, (value) => setGlobal('chatAnimationEnabled', value)),
    toggleRow('g-confine', 'Khóa trong màn hình hiện tại', 'Bị ném hay tự đi lang thang đều chỉ trong màn hình đang đứng.', g.confineToScreen, (value) => setGlobal('confineToScreen', value)),
    toggleRow('g-tray', 'Biểu tượng khay hệ thống', 'Chế độ desktop luôn có biểu tượng ở khay; tắt đi thì chỉ tìm lại được từ thanh tác vụ.', g.trayEnabled, (value) => setGlobal('trayEnabled', value)),
  ]);
}

function voiceCard() {
  const g = state.globals;
  // 运行时目录优先：宿主注册了 Edge / DeepSeek 就都列出来；拉不到回落构建期的内置清单
  const voices = state.voiceOptions && state.voiceOptions.length > 0
    ? state.voiceOptions
    : VOICES.map((voice) => ({ id: voice.id, name: voice.name, tag: voice.tag, provider: voice.provider }));
  const speechProviders = state.speechProviders || [];
  return card('Giọng nói', 'Bốn kiểu giọng nói, mỗi kiểu một công tắc riêng; dùng chung giọng đọc, bộ nhận dạng và âm lượng.', [
    toggleRow('g-voice', 'Đọc thủ công', 'Đọc to câu lẩm bẩm gọi từ menu chuột phải / lệnh gạch chéo và câu trả lời khi chat.', g.voiceEnabled, (value) => setGlobal('voiceEnabled', value)),
    selectField('g-voice-name', 'Giọng đọc', g.voiceName, voices.map((voice) => ({ value: voice.id, label: voice.name + (voice.tag ? ' · ' + voice.tag : ''), group: voice.provider })), (value) => setGlobal('voiceName', value)),
    numberField('g-voice-volume', 'Âm lượng (0–1)', g.voiceVolume, (value) => setGlobal('voiceVolume', clampNumber(value, 0, 1, 1)), { min: 0, max: 1, step: 0.05 }),
    toggleRow('g-voice-whisper', 'Đọc cả câu lẩm bẩm định kỳ', 'Đọc to câu lẩm bẩm tự sinh theo chu kỳ.', g.voiceWhisperEnabled, (value) => setGlobal('voiceWhisperEnabled', value)),
    toggleRow('g-voice-todo', 'Đọc cả lời nhắc việc', 'Đọc to lời nhắc khi việc cần làm tới hạn.', g.voiceTodoEnabled, (value) => setGlobal('voiceTodoEnabled', value)),
    toggleRow('g-voice-notify', 'Đọc thông báo', 'Đọc câu trạng thái đã cấu hình khi tác vụ xong, lỗi hoặc chờ bạn xác nhận; trang bị ẩn vẫn đọc.', g.voiceNotifyEnabled, (value) => setGlobal('voiceNotifyEnabled', value)),
    selectField('g-speech-provider', 'Nhận dạng giọng nói', g.speechProvider, speechProviders.map((item) => ({ value: item.id, label: item.name })), (value) => setGlobal('speechProvider', value), 'Bộ nào chuyển đoạn ghi âm (giữ để nói) thành chữ. Chỉ có nhiều lựa chọn khi đã cài plugin tương ứng; bộ đã chọn không dùng được thì báo lỗi rõ ràng, không tự đổi bộ khác.'),
  ]);
}

function fontCard() {
  const g = state.globals;
  return card('Giao diện & phông chữ', 'Phông chữ dùng chung cho bong bóng, chú thích khi rê chuột và cửa sổ chat.', [
    selectField('g-font-family', 'Phông chữ', g.font.family, FONT_IDS.map((id) => ({ value: id, label: id })), (value) => { g.font = Object.assign({}, g.font, { family: value }); }),
    numberField('g-font-size', 'Cỡ chữ (px)', g.font.size, (value) => { g.font = Object.assign({}, g.font, { size: clampNumber(value, 4, 200, 21) }); }, { min: 4, max: 200, step: 1, hint: 'Chỉ áp dụng cho bong bóng và chú thích, cửa sổ chat giữ nguyên cỡ chữ.' }),
    toggleRow('g-font-follow', 'Cỡ chữ theo kích thước thú cưng', 'Tắt thì luôn dùng cỡ chữ ở trên, không đổi theo kích thước cửa sổ.', g.font.followPet, (value) => { g.font = Object.assign({}, g.font, { followPet: value }); }),
  ]);
}

function physicsCard() {
  const g = state.globals;
  return card('Cảm giác kéo & ném', 'Dùng chung cho mọi thú cưng; đổi giá trị xong bấm lưu mới có hiệu lực.', [
    make('div', { class: 'grid2' }, [
      numberField('g-gravity', 'Gia tốc trọng trường (px/s²)', g.physics.gravity, (value) => { g.physics = Object.assign({}, g.physics, { gravity: clampNumber(value, 0, 10000, 1400) }); }, { min: 0, max: 10000, step: 10 }),
      numberField('g-restitution', 'Độ nảy khi chạm tường (0–1)', g.physics.restitution, (value) => { g.physics = Object.assign({}, g.physics, { restitution: clampNumber(value, 0, 1, 0.78) }); }, { min: 0, max: 1, step: 0.01 }),
    ]),
    make('div', { class: 'grid2' }, [
      numberField('g-friction', 'Ma sát bề mặt (/s)', g.physics.groundFriction, (value) => { g.physics = Object.assign({}, g.physics, { groundFriction: clampNumber(value, 0, 30, 2.5) }); }, { min: 0, max: 30, step: 0.1 }),
      numberField('g-power', 'Lực ném', g.physics.throwPower, (value) => { g.physics = Object.assign({}, g.physics, { throwPower: clampNumber(value, 0.1, 5, 1) }); }, { min: 0.1, max: 5, step: 0.1 }),
    ]),
    toggleRow('g-ceiling', 'Nảy ở mép trên', 'Tắt thì phía trên không có giới hạn, ném có thể bay khỏi mép trên màn hình.', g.physics.ceilingBounce !== false, (value) => { g.physics = Object.assign({}, g.physics, { ceilingBounce: value }); }),
    toggleRow('g-collide', 'Thú cưng va chạm nhau', 'Thú cưng đang bay đụng con khác sẽ bật ra theo động lượng.', g.physics.petCollision !== false, (value) => { g.physics = Object.assign({}, g.physics, { petCollision: value }); }),
  ]);
}

function motionCard() {
  const g = state.globals;
  const weights = g.animationWeights;
  const actionId = 'g-motion-action';
  const actionValue = () => String(Math.max(0, 100 - weights.idle - weights.turn - weights.move));
  const syncAction = () => {
    const node = byId(actionId);
    if (node) node.value = actionValue();
  };
  const weightField = (key, label) =>
    numberField('g-motion-' + key, label, weights[key], (value) => {
      const others = weights.idle + weights.turn + weights.move - weights[key];
      const max = Math.max(0, 100 - others);
      weights[key] = Math.round(Math.min(Math.max(value, 0), max));
      syncAction();
    }, { min: 0, max: 100, step: 1 });
  return card('Tần suất động tác', 'Bốn ô: chờ / xoay / di chuyển chỉnh được, động tác ngẫu nhiên tự tính (= 100 − ba ô kia). Dùng chung cho mọi thú cưng; pet pack có thể ghi đè trong file loại riêng.', [
    make('div', { class: 'grid2' }, [
      weightField('idle', 'Chờ (%)'),
      weightField('turn', 'Xoay (%)'),
      weightField('move', 'Di chuyển (%)'),
      numberField(actionId, 'Động tác ngẫu nhiên (%, tự tính)', actionValue(), () => {}, { min: 0, max: 100, step: 1, readOnly: true }),
    ]),
  ]);
}

function modelCard() {
  const g = state.globals;
  return card('Ngữ cảnh trò chuyện', 'Model và cách kết nối cấu hình ở trang "Nhà cung cấp AI"; ở đây chỉ chỉnh giữ bao nhiêu ngữ cảnh khi chat.', [
    make('div', { class: 'grid2' }, [
      numberField('g-memory', 'Số lượt nhớ khi chat', g.chatMemoryRounds, (value) => setGlobal('chatMemoryRounds', Math.round(clampNumber(value, 0, 100, 0))), { min: 0, max: 100, step: 1, hint: '0 = không mang theo lịch sử.' }),
      numberField('g-image-limit', 'Số ảnh tối đa', g.chatImageLimit, (value) => setGlobal('chatImageLimit', Math.round(clampNumber(value, 0, 50, 0))), { min: 0, max: 50, step: 1, hint: '0 = không giới hạn.' }),
    ]),
  ]);
}

function pathRows() {
  const meta = state.meta || {};
  const rows = [];
  const pairs = [['Cấu hình người dùng', meta.user], ['Mặc định có sẵn', meta.default], ['Cấu hình hoạt ảnh', meta.animations], ['Ảnh meme', meta.memes], ['Dữ liệu việc cần làm', meta.todos], ['Log', meta.logs]];
  for (const pair of pairs) {
    if (!pair[1]) continue;
    rows.push(make('div', { class: 'pathRow' }, [
      make('span', { class: 'pathKey', text: pair[0] }),
      make('span', { class: 'pathValue', text: String(pair[1]), title: String(pair[1]) }),
    ]));
  }
  if (Array.isArray(meta.storage)) {
    for (const item of meta.storage) {
      if (!item || !item.path) continue;
      rows.push(make('div', { class: 'pathRow' }, [
        make('span', { class: 'pathKey', text: item.exists === false ? 'Chưa tạo' : 'Đã có' }),
        make('span', { class: 'pathValue', text: String(item.path), title: String(item.path) }),
      ]));
    }
  }
  return rows.length ? rows : [make('p', { class: 'empty', text: 'Không đọc được thông tin vị trí lưu file.' })];
}

function advancedCard() {
  return card('Nâng cao', 'Tìm vị trí file ở đây khi muốn sửa cấu hình bằng tay; "Đồng bộ" sẽ ghi đè cấu hình người dùng bằng mặc định có sẵn.', [
    make('div', {}, pathRows()),
    make('div', { class: 'testRow' }, [button('Ghi đè cấu hình người dùng bằng mặc định', syncFromDefault)]),
  ]);
}

async function syncFromDefault() {
  const confirmed = await confirmDialog({
    title: 'Ghi đè cấu hình người dùng bằng mặc định',
    text: 'Toàn bộ cấu hình người dùng hiện tại sẽ bị thay thế, không thể hoàn tác.',
    confirmLabel: 'Ghi đè',
    danger: true,
  });
  if (!confirmed) return;
  const status = byId('pet-status');
  setStatus(status, 'Đang đồng bộ…');
  try {
    const merged = await callApi('POST', '/config');
    initDrafts(merged);
    markDirty(false);
    renderPetsPanel();
    setStatus(status, 'Đã ghi đè cấu hình người dùng bằng mặc định có sẵn.', 'ok');
  } catch (error) {
    setStatus(status, error && error.message ? error.message : String(error), 'error');
  }
}
`;
}
