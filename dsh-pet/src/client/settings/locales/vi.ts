/**
 * 设置页越南语文案（Tiếng Việt）；键集必须与 zh 完全一致，缺键或多键在类型检查期报错。
 */
import type { Key } from './zh.ts';

export const vi: Record<Key, string> = {
  nav: 'Cấu hình thú cưng',
  intro: 'Quản lý nhiều thú cưng: mỗi con có kích thước và vị trí riêng (áp dụng ngay sau khi lưu).',
  // 卡片标题与卡片级说明；说明统一进问号气泡。
  petCardTitle: 'Thú cưng',
  avatarLabel: 'Ảnh đại diện',
  avatarHint:
    'Ảnh nhỏ hiện cạnh tin nhắn của thú cưng này trong khung chat. Chưa tải lên thì dùng logo plugin; ảnh tải lên có hiệu lực ngay và thay ảnh cũ — không cần bấm Lưu.',
  avatarUpload: 'Tải ảnh đại diện',
  avatarChange: 'Đổi ảnh',
  avatarUploading: 'Đang tải lên…',
  avatarUploaded: 'Đã cập nhật ảnh đại diện',
  petCardHint:
    'Cài đặt riêng từng thú cưng: tên / kích thước / nơi hiển thị / góc màn hình / độ lệch / bốn công tắc tính năng. Bấm "Lưu" ở cuối để áp dụng ngay.',
  globalTitle: 'Công tắc chung',
  globalHint:
    'Dùng chung cho mọi thú cưng (gói thú cưng có thể ghi đè trong file loại riêng). Các công tắc này chỉ đổi trạng thái tạm, bấm "Lưu" mới ghi vào cấu hình người dùng (không ghi ngay); thông báo hệ thống được đọc lại ngay sau khi lưu, không cần tải lại trang.',
  cornerHint: 'Thú cưng bám vào góc nào của màn hình (ở chế độ desktop tính theo vùng làm việc của từng màn hình).',
  marginXHint: 'Khoảng cách ngang so với góc đã chọn (px); số bất kỳ.',
  marginYHint: 'Khoảng cách dọc so với góc đã chọn (px); số bất kỳ.',
  // 「/」命令菜单的行标题（图标由 app.ts 补上）。
  'cmd.chat': 'Trò chuyện',
  'cmd.pet': 'Thú cưng',
  'cmd.balance': 'Số dư',
  'shortcut.open': 'Mở chat với thú cưng',
  'shortcut.chat': 'Mở bong bóng chat',
  'shortcut.hear': 'Nhập bằng giọng nói',
  'shortcut.capture': 'Chụp màn hình gửi vào chat',
  shortcutCardTitle: 'Phím tắt',
  shortcutCardHint: 'Mở ra sẽ có hai nhóm: phím tắt thú cưng và phím tắt toàn cục.',
  shortcutRowChat: 'Mở chat',
  shortcutRowHold: 'Giữ để nói',
  shortcutRowHear: 'Nhập bằng giọng nói',
  shortcutRowCapture: 'Chụp màn hình',
  shortcutRowPaste: 'Dán ảnh',
  shortcutRowTodo: 'Việc cần làm',
  shortcutRowSleep: 'Ngủ / thức dậy',
  shortcutRowDisplay: 'Nơi hiển thị',
  shortcutRowSidebar: 'Mở chat ở thanh bên',
  shortcutGroupPet: 'Phím tắt thú cưng',
  shortcutGroupPetHint:
    'Trên web chỉ cần rê chuột lên thú cưng. Ở cửa sổ thú cưng trên desktop, bấm vào thú cưng trước để nó nhận bàn phím.',
  shortcutGroupGlobal: 'Phím tắt toàn cục',
  shortcutGroupGlobalHint: 'Do DSH xử lý trên bản web và cửa sổ desktop; đổi phím trong Cài đặt → Chung → Phím tắt.',
  petsLabel: 'Thú cưng',
  add: 'Thêm thú cưng',
  remove: 'Xóa',
  confirmRemove: 'Xóa thú cưng "{id}"?',
  confirmTitle: 'Xác nhận thao tác',
  cancel: 'Hủy',
  ok: 'Đã hiểu',
  atLeastOne: 'Phải giữ ít nhất một thú cưng.',
  emptyPets: 'Chưa có thú cưng nào — bấm "Thêm thú cưng" để tạo.',
  sizeLabel: 'Kích thước (rộng, px)',
  sizeHint: 'Chiều cao tự tính = rộng × 9/16.',
  sizePercentLabel: 'Rộng tối đa so với màn hình (%)',
  sizePercentHint:
    'Thú cưng được chiếm tối đa bao nhiêu phần chiều rộng màn hình: 100 = không bao giờ rộng hơn một màn hình (trên cửa sổ rộng thì giống hệt giá trị px); thử 30–40 để nó nhỏ hẳn trên điện thoại mà không đổi bản desktop. Tính một lần khi tải trang; đổi kích thước cửa sổ thì tải lại.',
  nameLabel: 'Tên',
  nameHint:
    'Hiện khi rê chuột và được thêm vào tính cách AI ("tên của em là X"). Cho phép trùng tên; để trống thì dùng id thú cưng.',
  personaLabel: 'Tính cách (không bắt buộc)',
  personaHint:
    'Chỉ áp dụng cho thú cưng này. Để trống thì theo tính cách mặc định — chữ xám trong ô chính là nội dung đó. Prompt hệ thống thực sự gửi đi = đoạn này + dòng 「tên của em là "<tên>"」 + ngữ cảnh thời gian hiện tại, nên đừng lặp lại tên hay ngày tháng ở đây.',
  personaCount: '{n} ký tự',
  balanceEnabled: 'Số dư',
  balanceEnabledHint: 'Bật thì thú cưng này phát hoạt ảnh số dư và hiện bong bóng số dư.',
  whisperEnabled: 'Lẩm bẩm',
  whisperEnabledHint:
    'Bật thì thú cưng này định kỳ nhờ AI nghĩ ra một câu và phát hoạt ảnh lẩm bẩm (tính cách = ô bên dưới; để trống thì theo mặc định).',
  workStatusEnabled: 'Trạng thái làm việc',
  workStatusEnabledHint:
    'Bật thì thú cưng này đi theo trạng thái làm việc của DSH: suy nghĩ / đang làm / chờ / xong / lỗi sẽ đổi hoạt ảnh và hiện bong bóng (danh sách câu nằm ở cấu hình cấp trên; chỉ lắng nghe, không gọi model).',
  fixedEnabled: 'Đứng yên tại chỗ',
  fixedEnabledHint:
    'Bật thì chuỗi ngẫu nhiên không còn xoay hay dắt thú cưng này đi chỗ khác — chỉ phát hoạt ảnh chờ và động tác tại chỗ. Chọn từ menu chuột phải, gọi API và hoạt ảnh số dư / lẩm bẩm / trạng thái làm việc không bị ảnh hưởng.',
  displayLabel: 'Nơi hiển thị',
  displayHint: 'web = chỉ trình duyệt / desktop = chỉ desktop / both = cả hai / none = không hiện',
  'display.web': 'Chỉ trình duyệt',
  'display.desktop': 'Chỉ desktop',
  'display.both': 'Cả hai',
  'display.none': 'Không hiện',
  cornerLabel: 'Vị trí',
  'corner.top-left': 'Trên bên trái',
  'corner.top-right': 'Trên bên phải',
  'corner.bottom-left': 'Dưới bên trái',
  'corner.bottom-right': 'Dưới bên phải',
  marginX: 'Lệch ngang',
  marginY: 'Lệch dọc',
  save: 'Lưu',
  saveHotkey: 'Ctrl+S / Cmd+S',
  sync: 'Đồng bộ',
  confirmSync:
    'Đồng bộ? Thao tác này ghi đè cấu hình người dùng bằng cấu hình mặc định đi kèm (mọi trường + chú thích); các tùy chỉnh hiện tại sẽ mất.',
  corruptTitle: 'Cấu hình người dùng bị hỏng — chưa lưu',
  corruptConfirm: 'Vẫn lưu',
  corruptBody:
    'Không đọc được file cấu hình người dùng (hỏng, không phải JSON/JSONC hợp lệ): {path}. Lưu bây giờ sẽ dựng lại file theo danh sách trắng — mọi thứ đang có trong file (hoạt ảnh / vật lý / meme …) sẽ mất. Hủy = giữ nguyên file (sửa xong rồi lưu lại); Xác nhận = vẫn lưu (bỏ nội dung trong file).',
  syncHint:
    '"Đồng bộ" ghi cấu hình mặc định đi kèm (có cả chú thích và mọi trường nâng cao) vào file cấu hình người dùng, ghi đè tùy chỉnh hiện tại; sau đó có thể sửa file trực tiếp. Hai lưu ý: (1) khi đã tạo, file đó là lớp ghi đè cố định — thay đổi về sau của cấu hình mặc định sẽ không tự áp dụng (cho tới khi đồng bộ lại hoặc xóa file); (2) bấm "Lưu" ở trang này sẽ viết lại file theo danh sách trắng — giữ giá trị các trường, bỏ chú thích.',
  configMeta: 'Nâng cao (file)',
  configMetaHint:
    'Cấu hình người dùng có thể ghi đè thú cưng / danh sách hoạt ảnh / trọng số — tải lại hoặc khởi động lại để áp dụng: tải lại trang trong trình duyệt, hoặc chuột phải thú cưng desktop → "Tải lại cấu hình" (dựng lại mọi cửa sổ thú cưng). Cấu hình mặc định là bản tham khảo đầy đủ.',
  defaultConfig: 'Cấu hình mặc định (chỉ đọc, bản tham khảo đầy đủ)',
  userConfig: 'Cấu hình người dùng (ghi đè tùy chỉnh)',
  todosFile: 'Dữ liệu việc cần làm (nội dung, hạn và trạng thái xong; xóa file là xóa hết việc)',
  animationDir: 'Thư mục hoạt ảnh (thêm/tùy chỉnh hoạt ảnh ở đây)',
  memesDir: 'Thư mục ảnh meme (thêm/tùy chỉnh ảnh ở đây)',
  logFile: 'File log (để tìm lỗi; xóa nội dung thoải mái)',
  logFileNote:
    'Ứng dụng desktop DSH không có console, nên mọi log khi chạy của plugin (khởi động, thú cưng desktop bị crash/khởi động lại, lỗi và cảnh báo) đều vào file này — đính kèm nó khi báo lỗi. Giới hạn 1 MB; đầy thì chỉ giữ 512 KB mới nhất.',
  saved: 'Đã lưu — thú cưng đã cập nhật ngay.',
  loadError: 'Không tải được cấu hình',
  saveError: 'Không lưu được cấu hình. Kiểm tra kết nối máy chủ, quyền ghi thư mục cấu hình và log máy chủ.',
  saveInvalid: 'Không lưu được cấu hình: cấu hình không hợp lệ. Kiểm tra các giá trị rồi thử lại.',
  syncError: 'Không đồng bộ được cấu hình. Kiểm tra kết nối máy chủ và quyền ghi thư mục cấu hình.',
  loading: 'Đang tải cấu hình…',
  retry: 'Thử lại',
  invalid: 'Kiểm tra dữ liệu nhập: kích thước phải là số dương; độ lệch là số bất kỳ.',
  busy: 'Đang lưu…',
  extraPetsHint:
    'Còn {n} loại khác lấy từ file trong thư mục pet/ (<tên>-config.json + <tên>-animation/). Chuyển sang chúng ở hàng Loại phía trên; Lưu sẽ ghi về config riêng của từng gói, không bao giờ ghi vào main-config.jsonc.',
  kindLabel: 'Loại',
  kindMain: 'Có sẵn',
  lastOfKind:
    '"{entry}" chỉ còn mỗi thú cưng này — xóa nó là xóa luôn cả loại. Muốn bỏ hẳn thì xóa các file của gói thú cưng.',
  savePartial:
    'Đã lưu thú cưng chính, nhưng không ghi lại được {names}: kiểm tra config của gói có hợp lệ và thư mục có ghi được không.',
  notifyToggle: 'Thông báo hệ thống',
  notifyToggleHint:
    'Thông báo của hệ điều hành (góc dưới bên phải desktop) khi hội thoại xong, thất bại, cần cấp quyền hoặc có câu hỏi. Mặc định chỉ hiện khi cửa sổ này không được chọn.',
  notifyWhenFocusedToggle: 'Báo cả khi đang mở',
  notifyWhenFocusedToggleHint:
    'Vẫn hiện thông báo và đọc câu trạng thái làm việc khi trang này đang hiển thị và được chọn. Mặc định tắt — bật lên nếu không muốn lỡ việc xong hay thất bại khi đang nhìn cửa sổ.',
  clickSoundToggle: 'Âm thanh khi bấm',
  clickSoundToggleHint:
    'Phát tiếng click có sẵn (assets/sound/click-duck.wav, âm lượng 0.5) khi bấm vào thú cưng; bấm liên tục trong 100ms chỉ kêu một lần, nhiều thú cưng không bị chồng tiếng. Tắt để im lặng. Ghi vào cấu hình người dùng khi bấm Lưu.',
  whisperImageToggle: 'Ảnh khi lẩm bẩm',
  whisperImageToggleHint:
    'Gắn ngẫu nhiên một ảnh meme vào mỗi câu lẩm bẩm (bảng ảnh nằm ở trường `memes` cấp trên của cấu hình). Token: lẩm bẩm vốn đã gọi model mỗi chu kỳ, ảnh chỉ thêm tên + mô tả của đúng một ảnh (~100 ký tự / ~60 token) vào cùng request — không đáng kể.',
  chatImageToggle: 'Ảnh khi chat',
  chatImageToggleHint:
    'Cho AI chọn một ảnh meme hợp ngữ cảnh (không bắt buộc; bảng ảnh nằm ở trường `memes` cấp trên). Token: mỗi tin nhắn mang theo cả danh mục — hiện khoảng 1.1k ký tự (~650 token, gấp ~11 lần lẩm bẩm) và tăng theo số ảnh; tắt đi thì không thêm gì.',
  chatAnimationToggle: 'Động tác khi chat',
  chatAnimationToggleHint:
    'Bật thì request chat mang theo danh sách hoạt ảnh phát được (mọi động tác trong animations.categories): nếu model thấy câu trả lời thật sự thể hiện một động tác, thú cưng sẽ diễn luôn; không thì chỉ trả lời bằng chữ. Token: mỗi tin nhắn mang cả danh sách; tắt thì không thêm gì. Mặc định chung cho mọi thú cưng (gói thú cưng có thể ghi đè trong config riêng).',
  confineToggle: 'Khóa trong màn hình hiện tại',
  confineToggleHint:
    'Nhiều màn hình: bật thì thú cưng chỉ ở trong màn hình nó đang đứng — bị ném thì chỉ nảy trong màn hình lúc thả (mép giữa các màn hình thành tường, không bay sang màn kế bên), tự đi lang thang cũng chỉ trong màn hình đó (bước nào vượt mép sẽ bị hủy). Tắt để cho đi qua lại giữa các màn hình như bình thường. Chỉ cho desktop — lớp phủ trên trình duyệt vốn luôn nằm trong khung nhìn.',
  trayToggle: 'Khay hệ thống',
  trayToggleHint:
    'Hiện biểu tượng ở khay (vùng thông báo trên Windows, thanh menu trên macOS) khi chế độ desktop đang chạy. Nó liệt kê mọi thú cưng trong cấu hình và bật/tắt từng con giữa desktop và web/không hiện — kể cả những con đang không ở desktop nên không có cửa sổ để chuột phải. Tắt đi thì muốn đưa thú cưng về desktop phải mở trình duyệt (trang cài đặt, hoặc chuột phải thú cưng trên web). Windows vốn đã gom biểu tượng bên thứ ba vào mục "biểu tượng ẩn". Chỉ cho chế độ desktop.',
  voiceTitle: 'Giọng nói',
  voiceHint:
    'Bốn công tắc và một giọng đọc: mỗi kiểu lời nói có công tắc riêng, không phụ thuộc nhau. Mặc định tắt hết; ghi vào cấu hình người dùng khi bấm "Lưu" (không ghi ngay).',
  voiceEnabled: 'Đọc câu lẩm bẩm thủ công',
  voiceEnabledHint:
    'Đọc to câu lẩm bẩm gọi từ menu chuột phải hoặc lệnh gạch chéo, cùng câu trả lời khi chat. Nút loa trong khung chat đọc một câu bất cứ khi nào bạn bấm. Chỉ quyết định có phát tiếng hay không — bong bóng, trí nhớ chat và thông báo hệ thống giữ nguyên; tổng hợp giọng lỗi thì ghi log, không làm gián đoạn hội thoại.',
  voiceWhisperEnabled: 'Đọc câu lẩm bẩm',
  voiceWhisperEnabledHint:
    'Đọc to câu lẩm bẩm tự sinh định kỳ. Mặc định tắt — lẩm bẩm là lời nền, không nên tự phát ra tiếng.',
  voiceTodoEnabled: 'Đọc nhắc việc',
  voiceTodoEnabledHint:
    'Đọc to lời nhắc khi việc cần làm tới hạn (bong bóng vẫn hiện; công tắc này chỉ quyết định có đọc hay không). Mặc định tắt.',
  voiceNotifyEnabled: 'Đọc trạng thái làm việc',
  voiceNotifyEnabledHint:
    'Đọc câu trạng thái đã cấu hình khi tác vụ xong, thất bại hoặc chờ bạn xác nhận. Giống thông báo hệ thống, chỉ đọc khi bạn không ở trang này (chuyển tab, không chọn cửa sổ, thu nhỏ) — không làm phiền khi đang nhìn màn hình. Chỉ đọc câu đã cấu hình, không đọc chi tiết tác vụ. Mặc định tắt.',
  voiceNameLabel: 'Giọng đọc',
  voiceNameHint:
    'Giọng nào đọc văn bản. Danh sách giọng đến từ bộ tổng hợp giọng nói; cài thêm bộ khác thì có thêm giọng.',
  speechProviderLabel: 'Nhận dạng giọng nói',
  speechProviderHint:
    'Bộ nào chuyển đoạn ghi âm thành chữ. Chỉ có nhiều lựa chọn khi đã cài plugin nhập giọng nói tương ứng; lựa chọn được lưu vào cấu hình, thiếu bộ đã chọn thì báo lỗi rõ ràng chứ không tự chuyển bộ khác.',
  voiceVolumeLabel: 'Âm lượng',
  voiceVolumeHint:
    'Âm lượng phát dạng số thập phân 0–1: 1 là to nhất (100%), 0 là tắt tiếng. Chỉ đổi độ to, không tổng hợp lại âm thanh nên chỉnh thoải mái không tốn gì. Cả bốn kiểu lời nói dùng chung âm lượng này.',
  physicsTitle: 'Vật lý (cảm giác kéo & ném)',
  physicsHint:
    'Mặc định chung cho mọi thú cưng (gói thú cưng có thể ghi đè trong file loại riêng); ghi vào cấu hình người dùng khi bấm "Lưu" (không ghi ngay). Trên trình duyệt áp dụng ngay; trên desktop áp dụng khi Lưu tải lại cửa sổ thú cưng.',
  mobileTitle: 'Hiệu ứng điện thoại',
  mobileHint:
    'Chỉ có tác dụng trên trình duyệt điện thoại: rung cần mô-tơ rung, hai công tắc chuyển động cần cảm biến nghiêng / gia tốc, và cảm biến cần HTTPS hoặc localhost.',
  'physics.gravity': 'Trọng lực',
  'physics.gravityHint': 'px/s² — càng cao rơi càng nhanh; 0 = không trọng lực (bay thẳng mãi)',
  'physics.restitution': 'Độ nảy',
  'physics.restitutionHint': '0–1, tỉ lệ tốc độ giữ lại khi nảy khỏi tường hoặc sàn (1 = nảy hoàn toàn, 0 = dừng hẳn)',
  'physics.groundFriction': 'Ma sát tiếp xúc',
  'physics.groundFrictionHint':
    'mỗi giây, lực hãm dọc theo bề mặt va chạm (tường, sàn, trần); 0 = mọi nơi trơn như băng',
  'physics.throwPower': 'Lực ném',
  'physics.throwPowerHint':
    '> 0, hệ số nhân chung cho độ bám lò xo và tốc độ khi thả (1 = mặc định; cao hơn = bám chặt hơn, ném mạnh hơn)',
  physicsCeilingBounce: 'Nảy trần',
  physicsCeilingBounceHint: 'Tắt để cú ném bay vượt qua mép trên màn hình (trọng lực vẫn kéo nó về)',
  physicsPetCollision: 'Va chạm giữa thú cưng',
  physicsPetCollisionHint: 'Thú cưng đang bay sẽ nảy khỏi con khác theo bảo toàn động lượng (khối lượng ∝ kích thước²)',
  physicsHaptic: 'Rung khi va chạm',
  physicsHapticHint:
    'Rung một lần mỗi va chạm (tường, sàn, trần, thú cưng khác). Chạy trên Chrome/Edge; không chạy trên iOS hay WebView như Via. Chế độ Không làm phiền sẽ chặn.',
  physicsTilt: 'Trọng lực theo độ nghiêng',
  physicsTiltHint:
    'Nghiêng điện thoại thì trọng lực đổi hướng theo (độ lớn = trọng lực ở trên); trọng lực bằng 0 thì nghiêng không có tác dụng. Cần HTTPS/localhost.',
  physicsShake: 'Lắc để ném',
  physicsShakeHint:
    'Lắc để hất thú cưng theo hướng lắc; độ mạnh theo lực ném. Không phụ thuộc trọng lực nên vẫn chạy khi trọng lực bằng 0. Cần HTTPS/localhost.',
  invalidPhysics: 'Kiểm tra thông số vật lý: trọng lực / ma sát ≥ 0, độ nảy 0–1, lực ném > 0.',
  fontTitle: 'Giao diện & phông chữ',
  fontHint:
    'Phông chữ áp dụng cho mọi chỗ đang dùng phông Candy: bong bóng thú cưng, chú thích khi rê chuột, popup chat, popup điểm. Cỡ chữ chỉ áp dụng cho bong bóng và chú thích khi rê chuột (popup chat và điểm giữ cỡ riêng). Mặc định chung cho mọi thú cưng (gói thú cưng có thể ghi đè trong file loại riêng); ghi vào cấu hình người dùng khi bấm "Lưu" — trình duyệt áp dụng ngay, desktop áp dụng khi Lưu tải lại cửa sổ thú cưng.',
  fontFamilyLabel: 'Phông chữ',
  fontFamilyHint:
    '"Candy (đi kèm)" có sẵn trong plugin; các phông khác là phông hệ thống. Máy không có phông nào thì tự dùng phông kế tiếp trong danh sách (không bao giờ trống hay báo lỗi).',
  fontSizeLabel: 'Cỡ chữ (px)',
  fontSizeHint:
    'Cỡ chữ nội dung bong bóng; chú thích và các dòng nhỏ trong bong bóng co giãn theo tỉ lệ. Khoảng 4–200.',
  fontFollowToggle: 'Cỡ chữ theo kích thước thú cưng',
  fontFollowToggleHint:
    'Bật (mặc định): chữ to lên theo thú cưng — ở độ rộng 462 px đúng bằng cỡ ở trên. Tắt: cỡ chữ cố định bất kể thú cưng to nhỏ.',
  invalidFont: 'Kiểm tra cài đặt phông: phông phải có trong danh sách và cỡ chữ là số từ 4 đến 200.',
  'font.candy': 'Candy (đi kèm)',
  'font.yahei': 'Microsoft YaHei / PingFang',
  'font.youyuan': 'YouYuan',
  'font.kaiti': 'KaiTi',
  'font.simsun': 'SimSun',
  'font.comic': 'Comic Sans MS',
  'font.system': 'Mặc định hệ thống',
  modelTitle: 'Chat & model',
  modelHint:
    'Lẩm bẩm và chat mỗi thứ dùng model nào, và mỗi request chat mang theo bao nhiêu lịch sử. "Theo hội thoại hiện tại" dùng model của hội thoại bạn đang mở (mặc định). Mặc định chung: áp dụng cho mọi thú cưng, gói thú cưng có thể ghi đè trong file loại riêng. Các lựa chọn lấy từ cùng nguồn với bộ chọn model của DSH, do máy chủ cung cấp trực tiếp.',
  modelFollow: 'Theo hội thoại hiện tại',
  modelSearch: 'Tìm model…',
  modelEmpty: 'Không có model phù hợp.',
  modelNoModels: 'Không có model nào.',
  modelLoading: 'Đang làm mới danh sách model…',
  modelTriggerAria: 'Chọn model, hiện tại {model}',
  modelUnknown: ' (cấu hình hiện tại, không có trong danh sách)',
  modelNone: 'Nhà cung cấp này không có model nào',
  whisperModelLabel: 'Model lẩm bẩm',
  chatModelLabel: 'Model chat',
  modelFieldHint:
    '"Theo hội thoại hiện tại" dùng model của hội thoại; nếu model đã chọn lỗi, plugin quay về model của hội thoại và thử lại một lần.',
  invalidModel:
    'Kiểm tra cài đặt model: chọn cả nhà cung cấp và model, hoặc để trống cả hai (theo hội thoại hiện tại).',
  modelCatalogFailed: 'Không tải được danh sách model (tải lại trang để thử lại); giá trị hiện tại được giữ nguyên.',
  chatMemory: 'Số lượt lịch sử chat',
  chatMemoryHint:
    'Mỗi request chat mang theo bao nhiêu lượt gần nhất (1 lượt = 1 câu hỏi + 1 câu trả lời; 0 = không lịch sử, mỗi tin nhắn bắt đầu lại từ đầu). Trí nhớ vẫn lưu tất cả — số này chỉ quyết định đưa bao nhiêu vào ngữ cảnh: càng cao càng nhớ nhiều và càng tốn token. Mặc định chung cho mọi thú cưng (gói thú cưng có thể ghi đè trong file loại riêng).',
  invalidChatMemory: 'Kiểm tra số lượt lịch sử chat: phải là số ≥ 0.',
  chatImageLimit: 'Giới hạn ảnh khi chat',
  chatImageLimitHint:
    'Tối đa bao nhiêu ảnh meme được liệt kê cho model khi chat ("N ảnh đầu" = N ảnh đầu tiên bạn viết trong cấu hình, nên đưa ảnh muốn gửi lên trước). Cả danh sách đi kèm mọi tin nhắn và token tăng theo số ảnh, danh sách dài chỉ tốn token; giới hạn N ảnh đầu thì model chỉ chọn trong số đó. 0 = không giới hạn (gửi tất cả). Mặc định 10. Mặc định chung cho mọi thú cưng (gói thú cưng có thể ghi đè trong file loại riêng). Chỉ áp dụng cho chat — lẩm bẩm chỉ mang đúng một ảnh đã bốc.',
  invalidChatImageLimit: 'Kiểm tra giới hạn ảnh khi chat: phải là số ≥ 0 (0 = không giới hạn).',
  notifyTest: 'Thử thông báo',
  notifyTestOk: 'Đã gửi thông báo thử — xem góc dưới bên phải desktop.',
  notifyDenyUnsupported: 'Môi trường này không hỗ trợ thông báo hệ thống (không có Notification API).',
  notifyDenyBlocked: 'Trình duyệt đang chặn quyền thông báo.',
  notifyDenyRejected: 'Bạn đã chọn "Chặn" ở hộp hỏi quyền.',
  notifyDenyError: 'Không xin được quyền',
  notifyGuide:
    'Hướng dẫn: bấm biểu tượng 🔒/ⓘ cạnh thanh địa chỉ → Cài đặt trang web → Thông báo → chọn "Cho phép", rồi tải lại trang và thử lại.',
  storageTitle: 'Gỡ cài đặt & lưu trữ',
  storageHint:
    'Mọi nơi plugin này ghi dữ liệu. Xóa thư mục cache thì vô hại (sẽ tải lại / dựng lại); xóa "dữ liệu người dùng của plugin" thì mất cấu hình và trí nhớ chat.',
  'storage.userData':
    'Dữ liệu người dùng của plugin: cấu hình tùy chỉnh main-config.jsonc, trí nhớ chat memory.json, hoạt ảnh tùy chỉnh main-animation/, thú cưng dạng file pet/',
  'storage.electron':
    'Bộ chạy Electron cho thú cưng desktop (dung lượng lớn; tự tải lại ở lần chạy chế độ desktop kế tiếp)',
  'storage.desktopCache': 'Cache cửa sổ thú cưng desktop và cache tỉ lệ màn hình chính (xóa thoải mái, tự dựng lại)',
  'storage.electronCache': 'Cache tải bộ cài Electron (xóa thoải mái, cần thì tải lại)',
  'storage.package': 'Bản thân plugin (do DSH quản lý — gỡ bằng lệnh bên dưới thay vì xóa tay)',
  storageMissing: ' (chưa được tạo)',
  uninstallTitle: 'Cách gỡ cài đặt',
  uninstallStep1: '1. Thoát DSH trước (thú cưng desktop thoát theo); đừng xóa các file này khi thú cưng đang chạy.',
  uninstallStep2: '2. Gỡ plugin (chạy trong terminal; lệnh này cũng bỏ nó khỏi lớp gói của profile):',
  uninstallStep3:
    '3. Xóa các vị trí ở trên nếu cần: thư mục cache thì vô hại; xóa "dữ liệu người dùng của plugin" thì mất cấu hình và trí nhớ chat (sao lưu main-config.jsonc trước nếu muốn giữ).',
  motionTitle: 'Tần suất động tác',
  motionHint:
    'Bốn ô: chờ / xoay / di chuyển chỉnh được, động tác ngẫu nhiên tự tính (100 − ba ô kia). Mặc định chung cho mọi thú cưng; gói thú cưng có thể ghi đè trong file loại riêng.',
  'motion.idle': 'Chờ',
  'motion.turn': 'Xoay',
  'motion.move': 'Di chuyển',
  'motion.action': 'Động tác ngẫu nhiên',
  uninstallCmd: 'dsh plugin --profile {profile} remove dsh-pet',
};
