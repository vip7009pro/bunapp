type vietnamese_sentences = {
  ID: string;
  CONTENT: string;
};
type korean_sentences = {
  ID: string;
  CONTENT: string;
};
type english_sentences = {
  ID: string;
  CONTENT: string;
};
export const vn_lang = {
  post_manager: "Quản lý bảng tin",
  information_register: "Đăng tin",
  information_board: "Bảng truyền thông",
  filetransfer: "Chuyển file",
  tool: "Công cụ",
  tienhanhsx: "Tình hình sản xuất",
  khsx: "Kế hoạch sản xuất",
  khosx: "Kho SX",
  eq_manager: "Quản lý máy",
  incominginspection: "Kiểm tra đầu vào",
  qualityissue: "Vấn đề chất lượng",
  audit: "Audit",
  cmsrequest: "Yêu cầu CMS",
  about: "Giới thiệu",
  contact: "Liên hệ",
  orders: "Đơn hàng",
  delivery: "Giao hàng",
  forecast: "Dự báo",
  vendorquality: "Chất lượng nhà cung cấp",
  khosub: "Kho Sub",
  overmonitor: "Tình hình SX Dư",
  baocaosx: "Báo cáo sản xuất",
  samplemonitor: "Theo dõi sample",
  baocaornd: "Báo cáo RnD",
  tinhthanhpho: "Tỉnh/thành phố",
  quanhuyen: "Quận huyện",
  xathitran: "Xã/Thị trấn",
  thonxom: "Thôn/xóm",
  sodienthoai:"Số điện thoại",
  ngaybatdaulamviec:"Ngày bắt đầu làm việc",
  ngaynghiviec: "Ngày nghỉ việc",
  password: "Password",
  email: "Email", 
  teamlamviec: "Team làm việc",
  capbac: "Cấp bậc",
  trangthailamviec: "Trạng thái làm việc",
  them: "Thêm",
  update: "Update",
  clear:"Clear",
  

  gioitinh: "Giới tính",
  ten: "Tên",
  hovadem: "Họ và đệm",
  machamcong: "Mã chấm công",
  lichsudilamfullinfo: "Lịch sử đi làm full info",
  nhanlucbophanphu: "Nhân lực điểm danh trong ngày theo bộ phận phụ",
  nhanlucbophanchinh: "Nhân lực điểm danh trong ngày theo bộ phận chính",
  bieudotrendingdilam: "Biểu đồ trending tình hình đi làm",
  nhamay: "Nhà máy",
  bophan: "Bộ phận",
  dieuchuyentoanbophan: "Điều chuyển toàn bộ phận",
  pheduyetnghitoanbophan: "Phê duyệt nghỉ toàn bộ phận",
  diemdanhtoanbophan: "Điểm danh toàn bộ phận",
  calamviec: "Ca làm việc",
  kieuxacnhan: "Kiểu xác nhận",
  xacnhanchamcong: "Xác nhận chấm công",
  thoigianketthuc: "Thời gian kết thúc",
  thoigianbatdau: "Thời gian bắt đầu",
  dangkytangca: "Đăng ký tăng ca",
  lydocuthe:"Lý do cụ thể",
  kieunghi: "Kiểu nghỉ",
  canghi: "Ca nghỉ",
  dangkynghi: "Đăng ký nghỉ",
  nhatkysanxuat: "Nhật ký sản xuất",
  lichsutemlotsx: "Lịch sử tem lot sản xuất",
  hieusuatsx: "Hiệu suất",
  tinhlieu: "Tính Liệu",
  nhapxuattonlieu: "Nhập-Xuất-Tồn Liệu",
  bophankho: "Kho",
  nhapxuattontp: "Tra Nhập-Xuất-Tồn TP",
  khothanhpham: "Kho Thành Phẩm",
  quanlygiaonhan: "Quản lý giao nhận dao film",
  productbarcodemanager: "Quản lý barcode sản phẩm",
  quanlyvatlieu: "Quản Lý Vật Liệu",
  phongmuahang: "Mua Hàng",
  quanlygiasanpham: "Quản Lý Giá",
  listchamcong: "Bảng Chấm Công",
  phonghanhchinhnhansu: "HC-NS",
  materiallotstatus: "Tình hình cuộn liệu",
  sxrolldata: "Data theo Roll",
  khothat: "Kho NVL",
  khoao: "Kho SX Main",
  shortage: "Shortage",
  ins_status: "Tình trạng KT",
  lichsuxuatlieuthat: "Lịch sử bắn lot liệu SX",
  dangnhap: "Đăng Nhập",
  nhothongtindangnhap: "Nhớ thông tin đăng nhập",
  quenmatkhau: "Quên mật khẩu",
  phongkinhdoanh: "Kinh Doanh",
  phongkinhdoanh2: "Phòng Kinh Doanh",
  quanlypo: "Quản lý PO",
  quanlyinvoices: "Quản lý Invoices",
  quanlyplan: "Quản lý Plan",
  quanlyFCST: "Quản lý FCST",
  quanlyYCSX: "Quản lý YCSX",
  quanlyPOFull: "PO tích hợp tồn kho",
  baocao: "Báo cáo",
  nhansubophan: "Nhân sự BP",
  quanlyphongban: "Quản lý phòng ban-nhân sự",
  diemdanhnhom: "Điểm danh nhóm",
  dangky1: "Đăng ký",
  thongtincuaban: "Thông tin của bạn",
  thongtinnhanvien: "Thông tin nhân viên",
  hovaten: "Họ và tên",
  manhansu: "Mã nhân sự",
  maerp: "Mã ERP",
  ngaythangnamsinh: "Ngày tháng năm sinh",
  quequan: "Quê quán",
  diachi: "Địa chỉ",
  bophanchinh: "Bộ phận chính",
  bophanphu: "Bộ phận phụ",
  vitrilamviec: "Vị trí làm việc",
  nhomdiemdanh: "Nhóm điểm danh",
  chucvu: "Chức vụ",
  tudaunamdengio: "Từ đầu năm đến giờ có",
  ngay: "ngày",
  songaybandilam: "Số ngày bạn đi làm",
  songaybantangca: "Số ngày bạn tăng ca",
  songayquenchamcong: "Số ngày quên chấm công",
  songaydangkynghi: "Số ngày đăng ký nghỉ ( không tính chủ nhật và nửa phép)",
  thuongphat: "Thưởng và phạt",
  khenthuong: "Khen Thưởng",
  kyluat: "Kỷ luật",
  thongtinsanpham: "Thông tin sản phẩm",
  quanlycodebom: "Quản Lý Code - BOM",
  quanlykhachhang: "Quản Lý Khách Hàng",
  dieuchuyenteam: "Điều Chuyển Team",
  pheduyet: "Phê Duyệt Nghỉ",
  lichsudilam: "Lịch Sử Đi Làm",
  quanlycapcao: "Quản Lý Cấp Cao",
  quanlycapcaons: "Quản Lý HR",
  baocaonhansu: "Báo Cáo Nhân Sự",
  phongqc: "Quality Ctrl",
  inspection: "Kiểm Tra",
  dtc: "Độ Tin Cậy",
  baocaoqc: "Báo Cáo QC",
  phongrnd: "RnD",
  thembomamazon: "Thêm BOM AMAZON",
  thietkedesignamazon: "Thiết kế Design AMAZON",
  phongqlsx: "QLSX",
  quanlyplansx: "Quản Lý PLAN",
  quanlycapa: "Quản Lý CAPA",
  quanlymrp: "Quản Lý MRP",
  phongsanxuat: "Sản Xuất",
  datasanxuat: "Data sản xuất",
  planstatus: "Trạng Thái Chỉ Thị",
  eqstatus: "Trạng Thái Máy",
};
export const en_lang = { 
  post_manager: "Post Manager",
  information_register: "Post Info",
  information_board: "Information Board",
  filetransfer: "File Transfer",
  tool: "Tool",
  tienhanhsx: "Production Status",
  khsx: "Production Plan",
  khosx: "Production Warehouse",
  eq_manager: "Machine Manager",
  incominginspection: "Incoming Inspection",
  qualityissue: "Quality Issue",
  audit: "Audit",
  cmsrequest: "CMS Request",
  about: "About",
  contact: "Contact",
  orders: "Orders",
  delivery: "Delivery",
  forecast: "Forecast",
  vendorquality: "Vendor Quality",
  khosub: "Sub Warehouse",
  overmonitor: "Over Monitor",
  baocaosx: "Production Report",
  samplemonitor: "Sample Monitor",
  baocaornd: "RnD Report",
  tinhthanhpho: "Province/City",
  quanhuyen: "District",
  xathitran: "Commune",
  thonxom: "Village",
  sodienthoai:"Phone Number",
  ngaybatdaulamviec:"Work Start Date",
  ngaynghiviec: "Work End Date",
  password: "Password",
  email: "Email", 
  teamlamviec: "Team",
  capbac: "Rank",
  trangthailamviec: "Work Status",
  them: "Add",
  update: "Update",
  clear:"Clear",

  gioitinh: "Sex",
  ten: "First Name",
  hovadem: "Mid & Last Name",
  machamcong: "Att ID",
  lichsudilamfullinfo: "Working history full",
  nhanlucbophanphu: "Checkin by Sub Dept",
  nhanlucbophanchinh: "Checkin by Main Dept",
  bieudotrendingdilam: "Work situation trending chart", 
  nhamay: "Factory",
  bophan: "Department",
  dieuchuyentoanbophan: "All Dept HR Transffer",
  pheduyetnghitoanbophan: "App Dept Leave Approve",
  diemdanhtoanbophan: "All Dept Att",
  calamviec: "Workshift",
  kieuxacnhan: "Checkin Type",
  xacnhanchamcong: "Checkin-out confirm",
  thoigianketthuc: "End Time",
  thoigianbatdau: "Start Time",
  dangkytangca: "Overtime Registration",
  lydocuthe:"Detailed Reason",
  kieunghi: "Leave Type",
  canghi: "Leave Shift",
  dangkynghi: "Sign up for leave",
  nhatkysanxuat: "Production Diary",
  lichsutemlotsx: "LOT No History",
  hieusuatsx: "Production Efficiency",
  nhapxuattonlieu: "Material In-Out-Stock",
  bophankho: "Warehouse",
  nhapxuattontp: "GR-GI-STOCK Query",
  khothanhpham: "Product Warehouse",
  quanlygiaonhan: "Handover management",
  productbarcodemanager: "Product Barcode Manager",
  quanlyvatlieu: "Material Management",
  phongmuahang: "Purchasing",
  quanlygiasanpham: "Quotation Manager",
  listchamcong: "Attendance list",
  phonghanhchinhnhansu: "HR",
  materiallotstatus: "Material Lot Status",
  sxrolldata: "Data by Roll",
  khothat: "Real Warehouse",
  khoao: "Virtual Warehouse",
  shortage: "Shortage",
  ins_status: "Inspection Status",
  lichsuxuatlieuthat: "Material Input History",
  eqstatus: "Machine Status",
  planstatus: "Production Status",
  dangnhap: "Log in",
  nhothongtindangnhap: "Remember login information",
  quenmatkhau: "Forgot password",
  phongkinhdoanh: "Business",
  phongkinhdoanh2: "Business Department",
  quanlypo: "PO management",
  quanlyinvoices: "Manage Invoices",
  quanlyplan: "Plan Manager",
  quanlyFCST: "FCST manager",
  quanlyYCSX: "YCSX Management",
  quanlyPOFull: "PO integrated inventory",
  baocao: "Report",
  nhansubophan: "Personnel",
  quanlyphongban: "Management of the Department",
  diemdanhnhom: "Group attendance",
  dangky1: "Register",
  thongtincuaban: "Your information",
  thongtinnhanvien: "Staff information",
  hovaten: "First and last name",
  manhansu: "HR code",
  maerp: "ERP code",
  ngaythangnamsinh: "Date of birth",
  quequan: "Home town",
  diachi: "Address",
  bophanchinh: "Main divisions",
  bophanphu: "Sub -division",
  vitrilamviec: "Working position",
  nhomdiemdanh: "Attendance group",
  chucvu: "position",
  tudaunamdengio: "From the beginning of the year until now",
  ngay: "day",
  songaybandilam: "Number of days you go to work",
  songaybantangca: "Number of days you work overtime",
  songayquenchamcong: "Number of days forgot to time time",
  songaydangkynghi:
    "Number of days of registration (excluding Sunday and half magic)",
  thuongphat: "Reward and punishment",
  khenthuong: "Reward",
  kyluat: "Punishment",
  thongtinsanpham: "Product information",
  quanlycodebom: "Code - BOM  management",
  quanlykhachhang: "Customer management",
  dieuchuyenteam: "Team transfer",
  pheduyet: "Approval of leave",
  lichsudilam: "History of work",
  quanlycapcao: "Senior manager",
  quanlycapcaons: "HR manager",
  baocaonhansu: "HR reports",
  phongqc: "QC",
  inspection: "Inspection Department",
  dtc: "Reliability Department",
  baocaoqc: "QC Report",
  phongrnd: "RnD",
  thembomamazon: "Add AMAZON BOM",
  thietkedesignamazon: "Design AMAZON",
  phongqlsx: "Production Management",
  quanlyplansx: "PROD Plan Management",
  quanlycapa: "CAPA Management",
  quanlymrp: "MRP Management",
  phongsanxuat: "Production",
  datasanxuat: "Production DATA",
};
export const kr_lang = {
  post_manager: "계시판 관리",
  information_register: "정보 등록",
  information_board: "계시판",
  filetransfer: "파일 전송",
  tool: "도구",
  tienhanhsx: "생산 현황",
  khsx: "생산 계획",
  khosx: "생산 창고",
  eq_manager: "기계 관리",
  incominginspection: "입고 검사",
  qualityissue: "품질 이슈",
  audit: "감사",
  cmsrequest: "CMS 요청",
  about: "소개",
  contact: "컨택",
  orders: "발주",
  delivery: "납품",
  forecast: "예측",
  vendorquality: "공급업체 품질",
  khosub: "서브 창고",
  overmonitor: "과생산 모니터",
  baocaosx: "생산 보고",
  samplemonitor: "샘플 모니터링",
  baocaornd: "RnD 보고서",
  tinhthanhpho: "시",
  quanhuyen: "군",
  xathitran: "코뮌",
  thonxom: "마을",
  sodienthoai:"전화 번호",
  ngaybatdaulamviec:"근무 시작일",
  ngaynghiviec: "퇴사 일",
  password: "Password",
  email: "Email", 
  teamlamviec: "팀",
  capbac: "직급",
  trangthailamviec: "근무 상태",
  them: "추가",
  update: "업데이트",
  clear:"지우기",
  
  gioitinh: "성별",
  ten: "이름",
  hovadem: "성",
  machamcong: "출석 ID",
  lichsudilamfullinfo: "출근 이력 Full",
  nhanlucbophanphu: "파트별 출근 현황",
  nhanlucbophanchinh: "부서별 출근 현황",
  bieudotrendingdilam: "출근 현황",
  nhamay: "공장",
  bophan: "부서",
  dieuchuyentoanbophan: "전 부서 인원 배치",
  pheduyetnghitoanbophan: "전 부서 결근 승인",
  diemdanhtoanbophan: "전 부서 출석 체크",
  calamviec: "근무 팀",
  kieuxacnhan: "확인 구분",
  xacnhanchamcong: "출근 확인",
  thoigianketthuc: "종료 시간",
  thoigianbatdau: "시작 시간",
  dangkytangca: "신청",
  lydocuthe:"세부 사유",
  kieunghi: "결근 구분",
  canghi: "교대",
  dangkynghi: "결근 신청",
  nhatkysanxuat: "생산 일기",
  lichsutemlotsx: "LOT No 이력",
  hieusuatsx: "생산 효율",
  nhapxuattonlieu: "원단 창고 입-출-재고",
  bophankho: "창고팀",
  nhapxuattontp: "완제품 창고 입-출-재고",
  khothanhpham: "완제품 창고",
  quanlygiaonhan: "자료 인수인계 관리",
  productbarcodemanager: "제품 바코드 관리",
  quanlyvatlieu: "자재 관리",
  phongmuahang: "구매팀",
  quanlygiasanpham: "가격 관리",
  listchamcong: "출석 리스트",
  phonghanhchinhnhansu: "인사팀",
  materiallotstatus: "원단 상태",
  sxrolldata: "롤별 Data",
  khothat: "원단 창고",
  khoao: "공정 원단 재고",
  shortage: "쇼티지",
  ins_status: "검사 상태",
  lichsuxuatlieuthat: "원단 투입 이력",
  eqstatus: "설비 상태",
  planstatus: "생산 지시 상태",
  dangnhap: "로그인",
  nhothongtindangnhap: "로그인 정보 기억",
  quenmatkhau: "비민 번호 찾기",
  phongkinhdoanh: "영업팀",
  phongkinhdoanh2: "영업팀",
  quanlypo: "PO 관리",
  quanlyinvoices: "인보이스 관리",
  quanlyplan: "납품계획 관리",
  quanlyFCST: "FCST 관리자",
  quanlyYCSX: "YCSX 관리",
  quanlyPOFull: "PO 통합 재고",
  baocao: "보고서",
  nhansubophan: "자부서 인사관리",
  quanlyphongban: "부서 관리",
  diemdanhnhom: "그룹 출석",
  dangky1: "신청",
  thongtincuaban: "당신의 정보",
  thongtinnhanvien: "직원 정보",
  hovaten: "성함",
  manhansu: "인사 코드",
  maerp: "ERP 코드",
  ngaythangnamsinh: "생년월일",
  quequan: "고향",
  diachi: "주소",
  bophanchinh: "메인 부서",
  bophanphu: "서브 부서",
  vitrilamviec: "근무 위치",
  nhomdiemdanh: "출석 그룹",
  chucvu: "위치",
  tudaunamdengio: "연초부터 지금까지",
  ngay: "일",
  songaybandilam: "출근 일수",
  songaybantangca: "잔업 일수",
  songayquenchamcong: "지문 누락 일수",
  songaydangkynghi: "결근 신청 일수",
  thuongphat: "징찬 과 처벌",
  khenthuong: "징찬",
  kyluat: "처벌",
  thongtinsanpham: "제품 정보",
  quanlycodebom: "코드 - BOM  관리",
  quanlykhachhang: "고객 관리",
  dieuchuyenteam: "인원 배치",
  pheduyet: "결근 승인·",
  lichsudilam: "출근 이력",
  quanlycapcao: "부서 총괄",
  quanlycapcaons: "인원원 총괄",
  baocaonhansu: "인사 보고",
  phongqc: "품질팀",
  inspection: "검사팀",
  dtc: "신뢰성팀",
  baocaoqc: "품질 보고서",
  phongrnd: "개발팀",
  thembomamazon: "AMAZON BOM 추가",
  thietkedesignamazon: "AMAZON 디잔인 설계",
  phongqlsx: "생산관리팀",
  quanlyplansx: "생산계획 관리",
  quanlycapa: "캐파 관리",
  quanlymrp: "MRP 관리",
  phongsanxuat: "생산팀",
  datasanxuat: "생산 DATA",
};
type sentences = {
  sentenceID: number;
  vi: string;
  en: string;
  kr: string;
};
const globaltext: Array<sentences> = [
  {
    sentenceID: 0,
    vi: "Đăng Nhập",
    en: "Sign In",
    kr: "로그인",
  },
  {
    sentenceID: 1,
    vi: "Nhớ thông tin đăng nhập",
    en: "Remember me",
    kr: "나를 기억",
  },
  {
    sentenceID: 2,
    vi: "Quên mật khẩu",
    en: "Forget Password",
    kr: "비민번호 찾기",
  },
  {
    sentenceID: 3,
    vi: "Phòng Kinh Doanh",
    en: "Business Team",
    kr: "영업 팀",
  },
  {
    sentenceID: 4,
    vi: "Phòng Kinh Doanh",
    en: "Business Team",
    kr: "영업팀",
  },
  {
    sentenceID: 5,
    vi: "Quản Lý PO",
    en: "PO Management",
    kr: "PO 관리",
  },
  {
    sentenceID: 6,
    vi: "Quản Lý Invoices",
    en: "Invoice Management",
    kr: "인보이스 관리",
  },
  {
    sentenceID: 7,
    vi: "Quản Lý Plan",
    en: "Plan Management",
    kr: "납품계획 관리",
  },
  {
    sentenceID: 8,
    vi: "Quản Lý FCST",
    en: "FCST Management",
    kr: "FCST 관리",
  },
  {
    sentenceID: 9,
    vi: "Quản Lý YCSX",
    en: "Production Request Management",
    kr: "생산요청 관리",
  },
  {
    sentenceID: 10,
    vi: "PO Tích Hợp Tồn Kho",
    en: "Product Inventory Integrated PO",
    kr: "재고집적된 PO관리",
  },
  {
    sentenceID: 11,
    vi: "Báo cáo",
    en: "Report",
    kr: "리포트",
  },
  {
    sentenceID: 12,
    vi: "Nhân sự bộ phận",
    en: "HR",
    kr: "인사",
  },
  {
    sentenceID: 13,
    vi: "Quản lý phòng ban- nhân sự",
    en: "Deparment - Employee Management",
    kr: "부서-인사 관리",
  },
  {
    sentenceID: 14,
    vi: "Điểm danh nhóm",
    en: "My Group Attendant",
    kr: "내 그룹 출석 체크",
  },
  {
    sentenceID: 15,
    vi: "Đăng ký",
    en: "Register",
    kr: "신청",
  },
  {
    sentenceID: 16,
    vi: "Báo cáo nhân sự",
    en: "HR Report",
    kr: "인사 보고",
  },
  {
    sentenceID: 17,
    vi: "Thông tin của bạn",
    en: "Your information",
    kr: "당신의 정보",
  },
  {
    sentenceID: 18,
    vi: "Thông tin nhân viên",
    en: "Employee Information",
    kr: "직원 정보",
  },
  {
    sentenceID: 19,
    vi: "Họ và tên",
    en: "Full Name",
    kr: "이름",
  },
  {
    sentenceID: 20,
    vi: "Mã nhân sự",
    en: "HR Code",
    kr: "사원 코드",
  },
  {
    sentenceID: 21,
    vi: "Mã ERP",
    en: "ERP Code",
    kr: "ERP코드",
  },
  {
    sentenceID: 22,
    vi: "Ngày tháng năm sinh",
    en: "Date of Birth",
    kr: "생년월일",
  },
  {
    sentenceID: 23,
    vi: "Quê quán",
    en: "HomeTown",
    kr: "고향",
  },
  {
    sentenceID: 24,
    vi: "Địa chỉ",
    en: "Living Address",
    kr: "거주 주소",
  },
  {
    sentenceID: 25,
    vi: "Bộ phận chính",
    en: "Main Department",
    kr: "대 부서",
  },
  {
    sentenceID: 26,
    vi: "Bộ phận phụ",
    en: "Sub Department",
    kr: "소 부서",
  },
  {
    sentenceID: 27,
    vi: "Vị trí làm việc",
    en: "Work Position",
    kr: "업무 위치",
  },
  {
    sentenceID: 28,
    vi: "Nhóm điểm danh",
    en: "Attendant Group",
    kr: "출석 체크 그룹",
  },
  {
    sentenceID: 29,
    vi: "Chức vụ",
    en: "Position",
    kr: "직무",
  },
  {
    sentenceID: 30,
    vi: "Từ đầu năm đến giờ có",
    en: "This year work days",
    kr: "올해 초부터 지금까지 근무일",
  },
  {
    sentenceID: 31,
    vi: "ngày",
    en: "days",
    kr: "일",
  },
  {
    sentenceID: 32,
    vi: "Số ngày bạn đi làm",
    en: "Your work days",
    kr: "당신이 근무일",
  },
  {
    sentenceID: 33,
    vi: "Số ngày bạn tăng ca",
    en: "Your overtime days",
    kr: "당신이 잔업일",
  },
  {
    sentenceID: 34,
    vi: "Số ngày quên chấm công",
    en: "Number of days missing fingerprint check",
    kr: "지문 체크 누락 일수",
  },
  {
    sentenceID: 35,
    vi: "Số ngày đăng ký nghỉ ( không tính chủ nhật và nửa phép)",
    en: "Number of registered days off (excluding Sunday and half leave)",
    kr: " 결근 신청 일수 (반차 및 일요일 미 포함)",
  },
  {
    sentenceID: 36,
    vi: "Thưởng phạt",
    en: "Payoff",
    kr: "장려 - 형벌",
  },
  {
    sentenceID: 37,
    vi: "Khen thưởng",
    en: "Reward",
    kr: "장려",
  },
  {
    sentenceID: 38,
    vi: "Kỷ luật",
    en: "Penalty",
    kr: "형벌",
  },
];
const getsentence = (sentence: number, lang: string): any => {
  let output: string = "";
  switch (lang) {
    case "kr":
      output = globaltext[sentence].kr;
      break;
    case "en":
      output = globaltext[sentence].en;
      break;
    case "vi":
      output = globaltext[sentence].vi;
      break;
    default:
      output = globaltext[sentence].vi;
      break;
  }
  return output;
};
const getValue = (part: any, o: any) =>
  Object.entries(o).find(([k, v]) => k===part)?.[1];
 /*  Object.entries(o).find(([k, v]) => k.startsWith(part))?.[1]; */
export const getlang = (key: string, lang: string): any => {
  //console.log(lang);
  if (lang === "vi") {
    return getValue(key, vn_lang);
  } else if (lang === "en") {
    return getValue(key, en_lang);
  } else if (lang === "kr") {
    return getValue(key, kr_lang);
  }
};
export default getsentence;
