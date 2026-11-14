/**
 * 单只宠物的卡片：选择器、增删与这只宠物的字段编辑（含头像行与人设）。
 *
 * 只改 state.pets 里的草稿，不直接写盘——保存与草稿装配见 ./pets。
 * @module dsh-pet/src/standalone/settings-page/script/pet-card
 */

/** 生成宠物卡片片段。 */
export function petCardScript(): string {
  return `
function petBar() {
  const list = currentPets();
  const options = list.map((pet, index) => ({ value: String(index), label: (pet.name || pet.id) + '（' + pet.id + '）' }));
  const picker = createSelect(options, String(state.petIndex), (value) => {
    state.petIndex = Number(value);
    renderPetsPanel();
  });
  picker.root.id = 'pet-picker';
  picker.root.firstElementChild.setAttribute('aria-label', 'Chọn thú cưng');
  return make('div', { class: 'petBar' }, [
    picker.root,
    button('Thêm', addPet),
    button('Xóa', removePet, { danger: true }),
  ]);
}

function addPet() {
  const list = currentPets();
  let index = list.length + 1;
  let id = (state.entry === 'main' ? 'pet-' : '') + index;
  while (list.some((pet) => pet.id === id)) {
    index += 1;
    id = (state.entry === 'main' ? 'pet-' : '') + index;
  }
  list.push({
    id: id,
    name: 'Thú cưng mới',
    size: 462,
    display: 'none',
    balanceEnabled: true,
    whisperEnabled: true,
    workStatusEnabled: true,
    fixedEnabled: false,
    position: { corner: 'bottom-right', marginX: 40, marginY: 40 },
  });
  state.petIndex = list.length - 1;
  markDirty(true);
  renderPetsPanel();
}

async function removePet() {
  const list = currentPets();
  const pet = list[state.petIndex];
  if (!pet) return;
  if (list.length <= 1) {
    await confirmDialog({
      title: 'Không thể xóa con cuối cùng',
      text:
        state.entry === 'main'
          ? 'Mục mặc định phải giữ ít nhất một thú cưng: xóa hết sẽ bị từ chối vì không hợp lệ, mở lại còn bị trả về danh sách mặc định có sẵn.'
          : 'Mỗi mục phải giữ ít nhất một thú cưng: xóa hết sẽ bị từ chối vì không hợp lệ.',
      confirmLabel: 'Đã hiểu',
      cancelLabel: null,
    });
    return;
  }
  const confirmed = await confirmDialog({
    title: 'Xóa thú cưng',
    text: 'Xóa "' + (pet.name || pet.id) + '"? Bấm Lưu mới ghi vào máy.',
    confirmLabel: 'Xóa',
    danger: true,
  });
  if (!confirmed) return;
  list.splice(state.petIndex, 1);
  state.petIndex = Math.max(0, Math.min(state.petIndex, list.length - 1));
  markDirty(true);
  renderPetsPanel();
}

function petCard() {
  const list = currentPets();
  const pet = list[state.petIndex];
  if (!pet) {
    return card('Thú cưng', null, [
      make('p', { class: 'empty', text: 'Mục này chưa có thú cưng nào, bấm "Thêm" để thêm một con.' }),
      make('div', { class: 'testRow' }, [button('Thêm', addPet)]),
    ]);
  }
  if (!pet.position) pet.position = { corner: 'bottom-right', marginX: 40, marginY: 40 };
  const sizePercent = typeof pet.sizePercent === 'number' ? String(pet.sizePercent) : '';
  const children = [
    petBar(),
    avatarRow(pet),
    textField('pet-name', 'Tên hiển thị', pet.name || '', (value) => { pet.name = value; }),
    textField('pet-id', 'Mã định danh (id)', pet.id, (value) => { pet.id = value.trim(); }, { disabled: true, hint: 'Mã định danh quyết định thư mục hoạt ảnh và file trí nhớ, tạo xong thì không đổi ở đây được.' }),
    make('div', { class: 'grid2' }, [
      numberField('pet-size', 'Kích thước khung (px)', pet.size, (value) => { pet.size = value; }, { min: 1, step: 1 }),
      textField('pet-size-percent', 'Chiếm bề rộng màn hình (%)', sizePercent, (value) => {
        if (value.trim() === '') delete pet.sizePercent;
        else pet.sizePercent = Number(value);
      }, { hint: 'Để trống thì hiển thị theo px.' }),
    ]),
    selectField('pet-display', 'Nơi hiển thị', pet.display, DISPLAYS.map((value) => ({ value: value, label: displayLabel(value) })), (value) => { pet.display = value; }, 'web = chỉ trình duyệt / desktop = chỉ desktop / both = cả hai / none = không hiện'),
    make('div', { class: 'grid2' }, [
      selectField('pet-corner', 'Góc bám', pet.position.corner, CORNERS.map((value) => ({ value: value, label: cornerLabel(value) })), (value) => { pet.position.corner = value; }),
      numberField('pet-margin-x', 'Lệch ngang (px)', pet.position.marginX, (value) => { pet.position.marginX = value; }, { step: 1 }),
    ]),
    numberField('pet-margin-y', 'Lệch dọc (px)', pet.position.marginY, (value) => { pet.position.marginY = value; }, { step: 1 }),
    toggleRow('pet-balance', 'Số dư', 'Bật thì thú cưng này phát hoạt ảnh và hiện bong bóng khi số dư thay đổi.', pet.balanceEnabled !== false, (value) => { pet.balanceEnabled = value; }),
    toggleRow('pet-whisper', 'Lẩm bẩm', 'Định kỳ nhờ model nghĩ ra một câu rồi phát; không cần thì tắt để tiết kiệm lượt gọi.', pet.whisperEnabled !== false, (value) => { pet.whisperEnabled = value; }),
    toggleRow('pet-work', 'Theo trạng thái làm việc', 'Đổi hoạt ảnh và bong bóng theo trạng thái hội thoại, không gọi model.', pet.workStatusEnabled !== false, (value) => { pet.workStatusEnabled = value; }),
    toggleRow('pet-fixed', 'Đứng yên tại chỗ', 'Bật thì chuỗi ngẫu nhiên không còn xoay hay di chuyển; chọn tay và kéo thả vẫn bình thường.', pet.fixedEnabled === true, (value) => { pet.fixedEnabled = value; }),
    make('div', { class: 'field' }, [
      make('label', { for: 'pet-persona', text: 'Tính cách của con này (không bắt buộc)' }),
      personaWrap(pet),
      make('p', { class: 'fieldHint', text: personaHint() }),
      make('p', { class: 'fieldHint', text: 'System gửi cho model = đoạn này + tên và ngữ cảnh thời gian tự thêm vào, đừng viết lặp lại ở đây.' }),
    ]),
  ];
  return card('Thú cưng', 'Đang sửa thú cưng thuộc ' + (state.entry === 'main' ? 'mục mặc định' : state.entry) + '; bấm Lưu mới ghi thay đổi vào máy.', children);
}

/** 条目人设提示：占位符里放的就是条目人设正文，这里只说规则。 */
function personaHint() {
  if (state.prompts[state.entry]) return 'Để trống = theo tính cách của mục chứa nó, chữ xám trong ô chính là nội dung đó.';
  return 'Mục này chưa có tính cách; để trống thì thú cưng này không có system prompt.';
}

/** 人设输入框连同右下角的字数统计；占位符用条目人设全文。 */
function personaWrap(pet) {
  const wrap = make('div', { class: 'personaWrap' });
  const area = make('textarea', { id: 'pet-persona' });
  area.value = typeof pet.whisperPrompt === 'string' ? pet.whisperPrompt : '';
  area.maxLength = 4000;
  area.rows = 4;
  const entryPrompt = state.prompts[state.entry] || '';
  area.placeholder = entryPrompt || 'Để trống thì không có system prompt';
  const count = make('span', { class: 'personaCount', text: area.value.length + ' ký tự' });
  area.addEventListener('input', () => {
    const text = area.value.trim();
    if (text) pet.whisperPrompt = area.value;
    else delete pet.whisperPrompt;
    count.textContent = area.value.length + ' ký tự';
    markDirty(true);
  });
  wrap.append(area, count);
  return wrap;
}
`;
}
