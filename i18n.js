/* ============================================================
   OneTap i18n · KO/EN runtime translation (v1)
   - ?lang=en|ko  >  localStorage 'onetap_lang'  >  navigator.language
   - DOM text and attributes are translated in place and restored on switch.
   - Elements added later by app.js are translated by a MutationObserver.
   - Missing keys are reported to console as "I18N_MISS: <korean>".
   ============================================================ */
(function (root, doc) {
  'use strict';

  var LANG_KEY = 'onetap_lang';
  var COMMON = /*__COMMON__*/ {"닫기":"Close","취소":"Cancel","저장":"Save","저장됨":"Saved","삭제":"Delete","복사":"Copy","복사됨":"Copied","다운로드":"Download","내려받기":"Download","공유":"Share","인쇄":"Print","초기화":"Reset","다시 시도":"Try again","불러오기":"Load","내보내기":"Export","적용":"Apply","추가":"Add","편집":"Edit","수정":"Edit","보기":"View","미리보기":"Preview","설정":"Settings","도움말":"Help","사용법":"Guide","예시":"Example","샘플":"Sample","무료":"Free","유료":"Paid","개인정보":"Privacy","개인정보 처리방침":"Privacy policy","개인정보 처리 안내":"Privacy notice","이용약관":"Terms","홈":"Home","뒤로":"Back","다음":"Next","이전":"Previous","확인":"OK","검색":"Search","필터":"Filter","전체":"All","없음":"None","준비 중":"Coming soon","준비 중입니다":"Coming soon","로딩 중":"Loading","불러오는 중":"Loading","처리 중":"Working","빈칸":"Blank","필수":"Required","선택":"Optional","이름":"Name","제목":"Title","날짜":"Date","시간":"Time","메모":"Note","상태":"Status","결과":"Result","요약":"Summary","상세":"Details","언어":"Language","한국어":"Korean","영어":"English","복사하기":"Copy","링크 복사":"Copy link","전체 복사":"Copy all","다크 모드로 전환":"Switch to dark mode","라이트 모드로 전환":"Switch to light mode","테마 전환":"Toggle theme","라이트/다크":"Light / dark","다크/라이트":"Dark / light","새 탭에서 보기":"Open in new tab","새 창":"New window","본문으로 건너뛰기":"Skip to content","본문으로 바로가기":"Skip to content","맨 위로":"Back to top","더 보기":"Show more","접기":"Collapse","펼치기":"Expand","자주 묻는 질문":"Frequently asked questions","이 브라우저에만 저장됩니다":"Saved only in this browser","이 브라우저에만 저장됩니다 · 서버 전송 0":"Saved only in this browser · zero uploads","서버 전송 없음":"No upload","서버 업로드 없음":"No server upload","100% 브라우저 처리":"100% in-browser","브라우저에서 처리":"Processed in your browser","파일은 서버로 전송되지 않습니다":"Files never leave your device","파일이 서버로 전송되지 않습니다":"Files never leave your device","붙여넣은 코드는 서버로 전송되지 않습니다":"Pasted code never leaves your device"};
  var APP = /*__DICT__*/ {"급여명세서 자동 생성기 — 주휴수당·4대보험·알바 급여명세서 1분":"Payslip Generator — weekly holiday pay and social insurance in a minute","5인 미만 사업장 사장님을 위한 급여명세서 생성기. 2026년 최저임금·주휴수당·4대보험·소득세를 자동 계산하고, 근로기준법 제48조 법정 기재사항을 갖춘 A4 명세서를 바로 인쇄·PDF 저장하세요. 입력값은 서버로 전송되지 않습니다.":"A payslip generator for owners with fewer than five staff. It works out the 2026 minimum wage, weekly holiday pay, social insurance and income tax, then prints or saves an A4 payslip with every item the Labor Standards Act §48 requires. Nothing you type leaves your browser.","급여명세서, 임금명세서, 주휴수당 계산기, 4대보험 계산기, 알바 급여명세서, 최저임금 2026, 5인 미만 급여명세서, 급여명세서 양식":"payslip, wage statement, weekly holiday pay calculator, social insurance calculator, part-time payslip, 2026 minimum wage, payslip template Korea","급여명세서 스튜디오":"Payslip Studio","주휴수당·4대보험·소득세 자동 계산, 법정 기재사항을 갖춘 A4 명세서 즉시 인쇄. 서버 전송 0건.":"Weekly holiday pay, social insurance and income tax worked out for you, printed at once on an A4 payslip with every statutory item. Nothing sent to a server.","본문 바로가기":"Skip to content","5인 미만 사장님을 위한 주휴수당·4대보험 1분 계산":"Weekly holiday pay and social insurance in a minute, for owners with fewer than 5 staff","서버 전송 0건":"Nothing sent to a server","2026년 근로기준법 필수 항목 반영":"All 2026 Labor Standards Act items included","직원 목록":"Employees","인쇄 · PDF":"Print · PDF","5인 미만 사업장 · 근로기준법 제48조":"Fewer than 5 staff · Labor Standards Act §48","최저시급 {0}":"Minimum wage {0}","주휴·4대보험·소득세":"Holiday pay, insurance, income tax","인쇄·PDF·텍스트 복사":"Print, PDF, copy text","2026 최저임금":"2026 minimum wage","원":" KRW","월 209시간 환산 {0}":"{0} for 209 hours a month","근로자 부담 4대보험":"Employee social insurance","연금 4.75 · 건보 3.595 · 요양 0.9448 · 고용 0.9":"pension 4.75 · health 3.595 · care 0.9448 · employment 0.9","주휴수당 발생 기준":"Weekly holiday pay applies","시간":" hours","이상 + 소정근로일 개근":"or more + full attendance","명세서 출력":"Payslips","법정 기재사항 6종 · PDF 저장":"6 statutory items · save as PDF","예시 값으로 채워뒀어요.":"Filled with sample values.","그대로 인쇄하지 말고 우리 사업장·직원 정보로 바꿔 주세요.":"Don't print it as is — put in your own workplace and employee details.","확인":"Got it","사업장 정보":"Workplace","명세서 상단에 표시":"Shown at the top of the payslip","상호":"Business name","대표자":"Representative","사업자등록번호":"Business registration no.","연락처":"Phone","직원 정보":"Employee","이 직원 저장":"Save this employee","성명":"Name","(필수)":"(required)","생년월일":"Date of birth","사원번호":"Employee no.","(선택)":"(optional)","입사일":"Hire date","부서·직책":"Team · role","근무 형태와 임금":"Work type and pay","사업장 규모":"Workplace size","5인 미만":"Under 5 staff","5인 이상":"5 or more staff","근로 형태":"Employment type","근로자":"Employee","프리랜서 3.3%":"Freelancer 3.3%","4대보험":"Social insurance","가입":"Enrolled","미가입":"Not enrolled","월 60시간 이상이면 국민연금·건강보험 가입 대상으로 자동 계산합니다.":"At 60 hours a month or more, pension and health insurance are applied automatically.","귀속 월":"Pay month","지급일":"Payment date","임금 형태":"Pay basis","시급제":"Hourly","월급제":"Monthly","시급":"Hourly rate","최저시급 10,320":"Minimum ₩10,320","월급 (세전)":"Monthly salary (gross)","주 소정근로시간":"Scheduled hours per week","15시간":"15h","20시간":"20h","25시간":"25h","40시간":"40h","주 소정근로일수":"Scheduled days per week","주 1일":"1 day a week","주 2일":"2 days a week","주 3일":"3 days a week","주 4일":"4 days a week","주 5일":"5 days a week","주 6일":"6 days a week","이번 달 총 근로시간":"Total hours this month","비우면 주 소정근로 × 4.345주로 자동 계산":"Leave blank to use weekly hours × 4.345","1일 소정근로시간":"Scheduled hours per day","주 소정근로 ÷ 근로일수":"weekly hours ÷ working days","주휴수당":"Weekly holiday pay","주 15시간 이상 + 개근":"15+ hours a week + full attendance","주휴수당 지급":"Pay weekly holiday allowance","끄면 명세서에서 0원 처리":"turn off and the payslip shows ₩0","주휴일":"Holiday day","일요일":"Sunday","월요일":"Monday","화요일":"Tuesday","수요일":"Wednesday","목요일":"Thursday","금요일":"Friday","토요일":"Saturday","이번 달 소정근로일 개근":"Full attendance this month","결근이 있으면 주휴수당이 발생하지 않습니다":"any absence cancels the allowance","월급에 주휴수당 포함":"Holiday pay included in salary","월급을 기본급과 주휴수당으로 나눠 표시합니다":"splits the salary into base pay and holiday pay","수당과 공제":"Allowances and deductions","0이면 비워두세요":"Leave empty for zero","연장근로":"Overtime","야간근로":"Night work","휴일근로":"Holiday work","식대":"Meal allowance","월 20만원 비과세":"₩200k a month tax-free","교통비":"Transport","월 20만원 비과세(자가운전보조금)":"₩200k a month tax-free (own-car allowance)","기타 수당":"Other allowances","과세":"taxable","기타 공제":"Other deductions","상환·학자금 등":"loan repayments, tuition…","소득세":"Income tax","간이세액표 기준":"from the simplified tax table","계산 방식":"Method","자동 추정":"Auto estimate","간이세액표 직접 입력":"Enter from the tax table","부양가족 수":"Dependants","본인 제외":"excluding yourself","0명 (본인만)":"0 (just you)","1명":"1","2명":"2","3명":"3","4명":"4","5명":"5","이번 달 소득세":"Income tax this month","계산 중":"Calculating","지급 총액":"Gross pay","공제 합계":"Total deductions","카톡·문자용 복사":"Copy for KakaoTalk / SMS","사장님 부담 인건비":"Employer's cost","참고":"Reference","국민연금 (4.75%)":"National pension (4.75%)","건강보험 (3.595%)":"Health insurance (3.595%)","장기요양 (건강보험료의 13.14%)":"Long-term care (13.14% of health premium)","고용보험 (0.9% + 고용안정 0.25%)":"Employment insurance (0.9% + 0.25% stability)","사업주 부담 합계":"Total employer cost","산재보험은 업종별 요율이 달라 제외했습니다. 150인 미만 사업장의 고용안정·직업능력개발 0.25%를 가정했습니다.":"Industrial accident insurance is left out because its rate varies by industry. A 0.25% employment-stability and skills levy for workplaces under 150 staff is assumed.","급여명세서 미리보기":"Payslip preview","실시간 반영 · A4 210×297mm · 1페이지 ·":"live · A4 210×297 mm · 1 page ·","확대":"Zoom","텍스트 복사":"Copy text","인쇄 · PDF 저장":"Print · Save PDF","우리동네 분식":"Neighbourhood Snacks","대표 김민수 · 123-45-67890 · 02-1234-5678":"Owner Kim Min-su · 123-45-67890 · 02-1234-5678","급여명세서":"Payslip","귀속월":"Pay month","근로자 · 5인 미만":"Employee · under 5 staff","김하늘":"Kim Ha-neul","홀":"Front of house","근로형태":"Employment","총 근로시간":"Total hours","연장·야간·휴일":"Overtime · night · holiday","지급 항목":"Earnings","산출내역":"Calculation","금액(원)":"Amount (KRW)","공제 항목":"Deductions","공제 총액":"Total deductions","실수령액":"Net pay","소정근로":"Scheduled","연장":"Overtime","야간":"Night","휴일":"Holiday","주휴":"Holiday pay","· 본 명세서는 「근로기준법」 제48조 제2항 및 같은 법 시행령 제27조의2에 따른 임금명세서입니다.":"· This payslip is a wage statement under the Labor Standards Act §48(2) and Enforcement Decree §27-2.","· 2026년 근로자 부담 요율: 국민연금 4.75%, 건강보험 3.595%, 장기요양보험(건강보험료의 13.14%), 고용보험 0.9%.":"· 2026 employee rates: national pension 4.75%, health insurance 3.595%, long-term care (13.14% of the health premium), employment insurance 0.9%.","· 소득세는 국세청 근로소득 간이세액표를 참고한 추정치이며, 실제 원천징수액과 차이가 있을 수 있습니다.":"· Income tax is an estimate based on the NTS simplified wage tax table and may differ from the amount actually withheld.","근로자 확인 (서명)":"Employee confirmation (signature)","위 내용과 같이 지급받았음을 확인합니다.":"I confirm I received the amounts shown above.","사용자 (서명·직인)":"Employer (signature · seal)","급여명세서 스튜디오 · 서버 전송 0건":"Payslip Studio · nothing sent to a server","인쇄 팁:":"Printing tip:","인쇄 창에서 용지를":"In the print dialog set paper to",", 배율":", scale to","(기본값)로 두고 ‘PDF로 저장’을 고르면 그대로 한 장이 나옵니다. 입력값은 이 브라우저에만 저장되고 어디로도 전송되지 않습니다.":" (the default) and choose “Save as PDF” to get exactly one page. Your inputs are stored only in this browser and never sent anywhere.","백업 JSON 불러오기":"Load backup JSON","· 2026년 근로기준법·4대보험 요율 기준의 참고 계산기입니다.":"· A reference calculator based on 2026 Labor Standards Act and social insurance rates.","세무사·노무사의 공식 검토를 거치지 않았으며, 신고·지급의 최종 판단과 책임은 사업주에게 있습니다. 실제 원천징수는 국세청 근로소득 간이세액표, 보험료는 4대보험 고지서를 확인하세요.":"It has not been formally reviewed by a tax accountant or labor consultant; the final decision and responsibility for reporting and payment rest with the employer. Check the NTS simplified wage tax table for withholding and the social insurance notices for premiums.","입력한 정보는 브라우저 저장소(localStorage)에만 남고 서버로 전송되지 않습니다.":"The details you enter stay in this browser's local storage and are never sent to a server.","개인정보 처리방침":"Privacy policy","명세서":"Payslip","아직 저장한 직원이 없어요":"No employees saved yet","‘이 직원 저장’을 누르면 다음 달에 시간만 바꿔 10초 만에 다시 발급할 수 있어요.":"Press “Save this employee” and next month you only change the hours to issue it again in seconds.","저장된 정보는 이 브라우저에만 있습니다. 기기를 바꾸려면 상단의 내보내기로 JSON 백업을 받아 두세요.":"Saved details live only in this browser. To move devices, export a JSON backup from the top bar.","새 직원 입력":"New employee","입력값은 브라우저에만 저장됩니다":"Inputs are saved only in this browser","직원 목록 열기":"Open the employee list","직원 정보 JSON 백업 내보내기":"Export employee backup as JSON","JSON 백업 내보내기":"Export JSON backup","급여명세서 인쇄 또는 PDF 저장":"Print or save the payslip as PDF","주요 기능":"Key features","2026년 기준 요약":"2026 key figures","홀 · 아르바이트":"front of house · part-time","급여명세서를 카톡·문자용 텍스트로 복사":"Copy the payslip as KakaoTalk / SMS text","급여명세서 A4 미리보기":"A4 payslip preview","직원 목록 닫기":"Close the employee list","급여명세서 스튜디오 (Payslip Studio)":"Payslip Studio","2026년 최저임금·주휴수당·4대보험·소득세를 자동 계산하고 근로기준법 제48조 법정 기재사항을 갖춘 A4 급여명세서를 만드는 무서버 로컬 웹앱.":"A serverless local web app that works out the 2026 minimum wage, weekly holiday pay, social insurance and income tax, and builds an A4 payslip with the items the Labor Standards Act §48 requires.","시급제·월급제 주휴수당 자동 계산":"Weekly holiday pay for hourly and monthly pay","2026년 4대보험 요율 자동 공제":"2026 social insurance rates deducted automatically","간이세액 추정 및 3.3% 프리랜서 원천징수":"Simplified income tax estimate and 3.3% freelancer withholding","법정 기재사항 6종을 갖춘 A4 1페이지 명세서":"One-page A4 payslip with all six statutory items","직원별 프로필 로컬 저장과 JSON 백업":"Per-employee profiles saved locally, with JSON backup","5인 미만 사업장도 급여명세서를 줘야 하나요?":"Do workplaces with fewer than five staff have to give payslips?","네. 근로기준법 제48조 제2항의 임금명세서 교부 의무는 상시 5인 미만 사업장에도 적용됩니다. 미교부 시 500만원 이하의 과태료 대상입니다.":"Yes. The duty to hand over a wage statement under Labor Standards Act §48(2) applies even to workplaces that regularly employ fewer than five people. Failing to do so can bring a fine of up to ₩5,000,000.","주 15시간 미만 알바도 주휴수당이 나오나요?":"Does a part-timer under 15 hours a week get weekly holiday pay?","4주 평균 1주 소정근로시간이 15시간 미만이면 주휴수당이 발생하지 않습니다. 15시간 이상이면서 소정근로일을 개근하면 주휴수당이 발생합니다.":"If scheduled hours average under 15 a week over four weeks, there is no weekly holiday pay. At 15 hours or more with full attendance on scheduled days, it applies.","5인 미만 사업장은 연장·야간·휴일 가산수당을 줘야 하나요?":"Do workplaces with fewer than five staff owe overtime, night and holiday premiums?","근로기준법 제56조의 가산수당은 상시 5인 이상 사업장에 적용됩니다. 5인 미만은 50% 가산 의무가 없어 근로시간에 해당하는 100%만 계산합니다. 다만 주휴수당(제55조 제1항)은 5인 미만에도 적용됩니다.":"The premium rates in §56 apply to workplaces that regularly employ five or more people. Below five, there is no 50% premium, so hours are paid at 100%. Weekly holiday pay (§55(1)) still applies under five.","decimal.js 엔진을 불러오지 못했습니다 (assets/vendor/decimal.js)":"Could not load the decimal.js engine (assets/vendor/decimal.js)","미가입 설정":"set to not enrolled","기본급":"Base pay","연장근로수당":"Overtime pay","야간근로수당":"Night work pay","휴일근로수당":"Holiday work pay","식대(과세)":"Meal allowance (taxable)","식대(비과세)":"Meal allowance (tax-free)","사업소득 · 전액 과세":"Business income · fully taxable","교통비(과세)":"Transport (taxable)","교통비(비과세)":"Transport (tax-free)","프리랜서 미적용":"not applied to freelancers","건강보험":"Health insurance","장기요양보험":"Long-term care insurance","고용보험":"Employment insurance","소득세(3%)":"Income tax (3%)","지방소득세(0.3%)":"Local income tax (0.3%)","사용자 입력":"you entered","건강보험료 × 13.14%":"health premium × 13.14%","근로소득세":"Income tax","간이세액표 입력":"from the tax table","간이세액 추정":"simplified estimate","지방소득세":"Local income tax","소득세 × 10%":"income tax × 10%","시급이 2026년 최저임금 {0}보다 {1} 낮습니다.":"The hourly rate is {0} below the 2026 minimum wage of {1}.","주 15시간 미만이라 주휴수당이 발생하지 않습니다.":"Under 15 hours a week, so no weekly holiday pay.","결근이 있어 이번 달 주휴수당을 0원으로 계산했습니다.":"There was an absence, so weekly holiday pay is ₩0 this month.","5인 미만은 가산수당 의무가 없어 100%로 계산했습니다.":"Under five staff there is no premium duty, so 100% was applied.","프리랜서 모드: 4대보험 없이 사업소득 3.3%만 원천징수합니다.":"Freelancer mode: only the 3.3% business-income withholding, no social insurance.","4대보험 미가입으로 설정해 공제하지 않았습니다.":"Social insurance is set to not enrolled, so nothing was deducted.","월 소정근로 {0}시간(60시간 미만)이라 국민연금·건강보험은 공제하지 않았습니다. 고용보험은 적용됩니다.":"At {0} scheduled hours a month (under 60), pension and health insurance are not deducted. Employment insurance still applies.","비과세 한도(식대·교통비 각 월 20만원) 초과분은 과세됩니다.":"Amounts above the tax-free cap (₩200,000 each for meals and transport) are taxable.","{0}년 귀속입니다. 요율은 2026년 기준으로 계산했습니다.":"For tax year {0}; rates are calculated on 2026 figures.","공제액이 지급액을 넘어 실수령액을 0원으로 표시했습니다. 4대보험 하한을 확인하세요.":"Deductions exceed pay, so net pay is shown as ₩0. Check the social insurance lower limits.","월급제 · 주 {0}시간":"Monthly · {0} hours a week","시급제 · 주 {0}시간":"Hourly · {0} hours a week","프리랜서(3.3%)":"Freelancer (3.3%)","부가세법":"VAT Act","브라우저 저장 공간이 부족해 저장하지 못했어요.":"Could not save: browser storage is full.","임금을 입력하세요":"Enter the wage","최저임금 충족 {0}":"Meets the minimum wage: {0}","최저임금 {0} 부족":"{0} below the minimum wage","5인 이상: 연장·야간·휴일근로에 50% 가산수당을 적용합니다.":"5 or more staff: a 50% premium applies to overtime, night and holiday work.","5인 미만: 가산수당(제56조) 의무는 없지만, 주휴수당(제55조 제1항)은 적용됩니다.":"Under 5 staff: no premium under §56, but weekly holiday pay (§55(1)) still applies.","연장·야간은 150%, 휴일은 8시간까지 150%·초과분 200%로 계산합니다. 같은 시간이 연장·야간에 겹치면 가산이 중첩됩니다(200%).":"Overtime and night work are paid at 150%; holiday work at 150% up to 8 hours and 200% beyond. Hours that are both overtime and night stack to 200%.","5인 미만은 50% 가산 의무가 없어 근로시간 × 시급(100%)으로 계산합니다.":"Under 5 staff there is no 50% premium, so hours × hourly rate (100%) is used.","프리랜서(사업소득) 모드에서는 주휴수당을 지급하지 않습니다. 필요하면 근로자 모드로 바꿔 계산하세요.":"Freelancer (business income) mode pays no weekly holiday allowance. Switch to employee mode if you need it.","결근이 있어 주휴수당이 0원입니다.":"There was an absence, so weekly holiday pay is ₩0.","1주 소정근로일을 모두 개근해야 주휴수당이 발생합니다.":"Weekly holiday pay requires full attendance on all scheduled days in the week.","주 {0}시간은 주휴수당 대상이 아니에요.":"{0} hours a week does not qualify for weekly holiday pay.","4주 평균 1주 소정근로시간이 15시간 이상이어야 발생합니다.":"Scheduled hours must average 15 or more a week over four weeks.","주휴수당 지급을 껐습니다. 명세서에는 0원으로 표시됩니다.":"Weekly holiday allowance is switched off, so the payslip shows ₩0.","월급에 주휴수당이 포함되어 있어요.":"The monthly salary already includes weekly holiday pay.","주 {0}시간 · 주휴 {1}시간 × {2}회 = {3}을 월급에서 나눠 표시합니다.":"At {0} hours a week, {1} holiday hours × {2} times = {3} is split out of the salary.","통상시급 {0} (월급 ÷ {1}시간)":"Ordinary hourly rate {0} (salary ÷ {1} hours)","프리랜서는 4대보험을 공제하지 않습니다(사업소득 3.3%).":"Freelancers pay no social insurance — 3.3% business income withholding instead.","4대보험 미가입으로 설정해 공제하지 않았습니다. 실제 가입 여부를 확인하세요.":"Social insurance is set to not enrolled, so nothing was deducted. Check the actual enrolment.","국민연금·건강보험·고용보험을 공제합니다. (월 소정 {0}시간)":"Pension, health and employment insurance are deducted. ({0} scheduled hours a month)","사업장명":"Business name","대표 {0}":"Owner {0}","미발생":"not accrued","해당 없음":"None","월 {0}":"{0} a month","직원 이름을 먼저 입력해 주세요.":"Enter the employee's name first.","{0} 님 정보를 저장했어요.":"Saved {0}'s details.","월급 {0}":"Salary {0}","시급 {0} · 주 {1}시간":"{0} an hour · {1} hours a week","실수령":"Take-home","불러오기":"Load","삭제":"Delete","직원 정보를 찾지 못했어요.":"Could not find that employee.","{0} 님 정보를 불러왔어요.":"Loaded {0}'s details.","정말 삭제?":"Delete?","{0} 님 정보를 삭제했어요.":"Deleted {0}'s details.","새 직원 정보를 입력해 주세요.":"Enter the new employee's details.","카톡·문자에 붙여넣을 수 있게 복사했어요.":"Copied — paste it into KakaoTalk or a text message.","복사하지 못했어요. 미리보기에서 직접 선택해 주세요.":"Could not copy. Please select the text in the preview.","직원 정보를 JSON 파일로 내보냈어요.":"Exported employee details as a JSON file.","employees 배열 없음":"no employees array","유효한 직원 없음":"no valid employees","이름 없음":"no name","백업 파일을 읽지 못했어요. 이 앱에서 내보낸 JSON인지 확인해 주세요.":"Could not read the backup. Check that it is JSON exported from this app.","맞춤":"Fit","1. 수집하는 개인정보":"1. Personal data we collect","2. 저장 위치와 항목":"2. What is stored, and where","3. 외부 전송":"3. External requests","4. 쿠키·추적":"4. Cookies and tracking","5. 보관과 삭제":"5. Retention and deletion","6. 제3자 제공":"6. Third-party sharing","7. 문의":"7. Contact","개인정보 처리 방침 — 급여명세서 스튜디오":"Privacy policy — Payslip Studio","개인정보 처리 방침":"Privacy policy","최종 갱신 2026-11-21":"Last updated 2026-11-21","없습니다. 사업주가 입력한 직원 이름·생년월일·급여·근무 정보는 계산과 명세서 출력을 위해서만 쓰이며 운영자에게 전달되지 않습니다.":"None. The employee name, date of birth, pay and working details the employer enters are used only to calculate and print the payslip, and never reach the operator.","직원 정보와 계산 설정이 브라우저 localStorage에 저장됩니다. 민감한 정보이므로 공용 PC에서는 사용 후 삭제하세요.":"Employee details and settings are stored in your browser's local storage. That is sensitive information, so delete it after use on a shared computer.","외부 전송이 0건입니다. 4대보험·세액 계산은 모두 브라우저 안에서 실행되고, 명세서는 인쇄 또는 PDF 저장으로만 나갑니다.":"Nothing is sent out. Social insurance and tax are calculated entirely in the browser, and the payslip leaves only as a printout or a saved PDF.","쿠키를 쓰지 않습니다. 분석 도구·광고 픽셀·외부 트래커를 넣지 않으며, 이용 기록을 수집하지 않습니다.":"No cookies. There are no analytics tools, ad pixels or external trackers, and no usage history is collected.","저장한 명세서를 목록에서 개별 삭제할 수 있고, 브라우저 사이트 데이터를 삭제하면 저장된 직원 정보와 명세서가 모두 사라집니다. 한 번에 지우려면 브라우저의 사이트 데이터 삭제를 사용하세요.":"Saved payslips can be deleted one by one from the list, and clearing site data in the browser removes every saved employee and payslip. To erase everything at once, use the browser's clear-site-data option.","제3자에게 제공하는 데이터가 없습니다. 운영자는 이용자의 데이터를 받지 않으므로 별도 제공·위탁이 없습니다.":"No data is shared with third parties. The operator receives nothing, so there is nothing to share or outsource.","이 앱은 정적 파일로 배포되며 운영자에게 개인정보가 전달되지 않습니다. 문의·오류 제보는 배포 페이지에 안내된 연락처나 배포 저장소의 이슈로 남겨 주세요.":"This app is served as static files, so no personal data reaches the operator. For questions or bug reports, use the contact on the deployed page or open an issue in the deployment repository.","← 앱으로 돌아가기":"← Back to the app","급여명세서 스튜디오는 서버 없이 브라우저에서만 동작하는 정적 앱으로, 수집하는 개인정보가 없습니다.":"Payslip Studio is a static app that runs entirely in the browser with no server and collects no personal data.","임금명세서 교부 의무는 5인 미만 사업장에도 적용됩니다. 미교부 시 500만원 이하 과태료.":"Handing over a wage statement is required even with fewer than five staff. A missed statement can cost up to ₩5,000,000 in fines.","자동":"Auto","A4 1장":"One A4 page","주 15":"15+","장":"pages","국민연금":"National pension","비과세 {0}":"Tax-free {0}","자동 추정 {0}":"Auto estimate {0}","주휴 포함":"holiday pay included","주휴 미포함":"holiday pay not included","김민수":"Kim Min-su","2014년":"2014","명":" people"};
  var PATTERNS = /*__PATTERNS__*/ [[new RegExp("^(\\d[\\d.,]*)\\s*일$", ""), "$1 days"],[new RegExp("^(\\d[\\d.,]*)\\s*년$", ""), "$1 years"],[new RegExp("^(\\d[\\d.,]*)\\s*개월$", ""), "$1 months"],[new RegExp("^(\\d[\\d.,]*)\\s*시간$", ""), "$1 hours"],[new RegExp("^(\\d[\\d.,]*)\\s*분$", ""), "$1 min"],[new RegExp("^(\\d[\\d.,]*)\\s*명$", ""), "$1 people"],[new RegExp("^(\\d[\\d.,]*)\\s*개$", ""), "$1"],[new RegExp("^(\\d[\\d.,]*)\\s*년\\s*(\\d[\\d.,]*)\\s*개월$", ""), "$1 yr $2 mo"],[new RegExp("^(\\d[\\d.,]*)\\s*년\\s*(\\d[\\d.,]*)\\s*개월\\s*(\\d[\\d.,]*)\\s*일$", ""), "$1 yr $2 mo $3 d"],[new RegExp("^(\\d[\\d.,]*)\\s*개월\\s*(\\d[\\d.,]*)\\s*일$", ""), "$1 mo $2 d"],[new RegExp("^(\\d[\\d.,]*)\\s*일\\s*전$", ""), "$1 days ago"],[new RegExp("^(\\d[\\d.,]*)\\s*개월\\s*전$", ""), "$1 months ago"],[new RegExp("^(\\d[\\d.,]*)\\s*년\\s*전$", ""), "$1 years ago"],[new RegExp("^([\\d.,]+)시간$", ""), "$1 hours"],[new RegExp("^([\\d.,]+)시간 × (\\{0\\})$", ""), "$1 hours × $2"],[new RegExp("^월 (\\{0\\})시간 · 60시간 미만$", ""), "$1 hours a month · under 60"],[new RegExp("^월급 (\\{0\\}) − 주휴 (\\{1\\})$", ""), "Salary $1 − holiday pay $2"],[new RegExp("^월급 (\\{0\\})$", ""), "Salary $1"],[new RegExp("^월급 포함 · ([\\d.,]+)시간 × ([\\d.,]+)회$", ""), "Included in salary · $1 hours × $2 times"],[new RegExp("^([\\d.,]+)시간 × (\\{0\\}) × ([\\d.,]+)회$", ""), "$1 hours × $2 × $3 times"],[new RegExp("^([\\d.,]+)시간 × (\\{0\\}) × ([\\d.,]+)%$", ""), "$1 hours × $2 × $3%"],[new RegExp("^8h 이내 ([\\d.,]+)시간 × ([\\d.,]+)% \\+ 초과 ([\\d.,]+)시간 × ([\\d.,]+)%$", ""), "First 8 h $1 × $2% + beyond $3 h × $4%"],[new RegExp("^과세 (\\{0\\}) × 3%$", ""), "Taxable $1 × 3%"],[new RegExp("^과세 (\\{0\\}) × 0.3%$", ""), "Taxable $1 × 0.3%"],[new RegExp("^(\\{0\\}) × 3.595%$", ""), "$1 × 3.595%"],[new RegExp("^(\\{0\\}) × 0.9%$", ""), "$1 × 0.9%"],[new RegExp("^(\\{0\\}) × 4.75%$", ""), "$1 × 4.75%"],[new RegExp("^([\\d.,]+) · ([\\d.,]+) · ([\\d.,]+)시간$", ""), "$1 · $2 · $3 hours"],[new RegExp("^(\\d{4})년 (\\d{1,2})월$", ""), "$2/$1"],[new RegExp("^(\\d{4})년 (\\d{1,2})월 실수령액$", ""), "Take-home · $2/$1"],[new RegExp("^(\\d{4})년 (\\d{1,2})월 실수령액$", ""), "Take-home · $2/$1"],[new RegExp("^시급제 · 주 ([\\d.,]+)시간$", ""), "Hourly · $1 hours a week"],[new RegExp("^월급제 · 주 ([\\d.,]+)시간$", ""), "Monthly · $1 hours a week"],[new RegExp("^시급제 · 주 ([\\d.,]+)시간 · 프리랜서 3.3%$", ""), "Hourly · $1 hours a week · freelancer 3.3%"],[new RegExp("^([\\d.,]+)명 불러옴 \\(새로 ([\\d.,]+) · 갱신 ([\\d.,]+)\\)$", ""), "$1 employees loaded ($2 new · $3 updated)"],[new RegExp("^국민연금·건강보험·고용보험을 공제합니다\\. \\(월 소정 ([\\d.,]+)시간\\)$", ""), "Pension, health and employment insurance are deducted. ($1 scheduled hours a month)"],[new RegExp("^주휴 ([\\d.,]+)시간 × (\\{0\\}) = 주 (\\{1\\})$", ""), "Holiday pay $1 hours × $2 = $3 a week"],[new RegExp("^자동 추정 (\\{0\\})$", ""), "Auto estimate $1"],[new RegExp("^부양가족 ([\\d.,]+)명 기준\\. 실제 원천징수는 국세청 간이세액표 금액을 입력하면 정확합니다\\.$", ""), "$1 dependants. Entering the NTS simplified tax table amount gives the exact withholding."],[new RegExp("^주 ([\\d.,]+)시간$", ""), "$1 hours a week"],[new RegExp("^([\\d.,]+)시간 × ([\\d.,]+)회$", ""), "$1 hours × $2 times"],[new RegExp("^발급일 (.+)$", ""), "Issued $1"],[new RegExp("^자동 ([\\d.,]+)시간$", ""), "Auto $1 hours"],[new RegExp("^이번 달 일요일 ([\\d.,]+)회 →$", ""), "This month: Sunday × $1 →"],[new RegExp("^이번 달 월요일 ([\\d.,]+)회 →$", ""), "This month: Monday × $1 →"],[new RegExp("^이번 달 화요일 ([\\d.,]+)회 →$", ""), "This month: Tuesday × $1 →"],[new RegExp("^이번 달 수요일 ([\\d.,]+)회 →$", ""), "This month: Wednesday × $1 →"],[new RegExp("^이번 달 목요일 ([\\d.,]+)회 →$", ""), "This month: Thursday × $1 →"],[new RegExp("^이번 달 금요일 ([\\d.,]+)회 →$", ""), "This month: Friday × $1 →"],[new RegExp("^이번 달 토요일 ([\\d.,]+)회 →$", ""), "This month: Saturday × $1 →"]];
  var BLOCKS = /*__BLOCKS__*/ {"hero-h1":"A payslip for your part-timer,<br>done in <em>one minute</em>.","hero-lead":"Weekly holiday pay, social insurance and income tax are calculated for you. Everything the Labor Standards Act §48 requires is on one A4 sheet, ready to print or send on KakaoTalk."};

  var DICT = {};
  var k;
  for (k in COMMON) if (Object.prototype.hasOwnProperty.call(COMMON, k)) DICT[k] = COMMON[k];
  for (k in APP) if (Object.prototype.hasOwnProperty.call(APP, k)) DICT[k] = APP[k];

  var HANGUL = /[\u1100-\u11FF\u3130-\u318F\uAC00-\uD7A3]/;
  var SKIP_TAG = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, TEXTAREA: 1, CODE: 1, SVG: 1 };
  var ATTRS = ['placeholder', 'aria-label', 'title', 'alt'];
  var state = { lang: 'ko' };
  var records = [];
  var missing = {};
  var missingList = [];
  var observer = null;

  /* ---------- language ---------- */
  function detect() {
    try {
      var q = new URLSearchParams(root.location.search).get('lang');
      if (q === 'ko' || q === 'en') return q;
    } catch (e) { /* very old browser */ }
    try {
      var saved = root.localStorage.getItem(LANG_KEY);
      if (saved === 'ko' || saved === 'en') return saved;
    } catch (e) { /* private mode */ }
    var nav = root.navigator.language || root.navigator.userLanguage || 'ko';
    return /^ko/i.test(nav) ? 'ko' : 'en';
  }

  /* ---------- lookup ---------- */
  function report(text) {
    if (missing[text]) return;
    missing[text] = 1;
    missingList.push(text);
    if (root.console && console.warn) console.warn('I18N_MISS: ' + text);
  }

  /* Pattern with capture translation: captures that still hold Korean are looked up too. */
  function applyPattern(core, p) {
    if (!p[0].test(core)) return null;
    var m = p[0].exec(core);
    var caps = [], i, ok = true;
    for (i = 1; i < m.length; i++) {
      var c = m[i];
      if (c == null) { caps[i] = ''; continue; }
      if (HANGUL.test(c)) {
        var t = lookupSmall(c.trim());
        if (t == null) { ok = false; caps[i] = c; } else { caps[i] = t; }
      } else { caps[i] = c; }
    }
    var out = p[1].replace(/\$(\d+)/g, function (all, n) { return caps[+n] != null ? caps[+n] : all; });
    if (!ok || HANGUL.test(out)) return null;
    return out;
  }

  function tr(raw) {
    if (typeof raw !== 'string' || !HANGUL.test(raw)) return raw;
    raw = raw.replace(/\u00a0/g, ' ');
    var m = /^(\s*)([\s\S]*?)(\s*)$/.exec(raw);
    var lead = m[1], core = m[2], tail = m[3];
    if (!core) return raw;
    var hit = DICT[core];
    if (hit == null && /\s{2,}|\n/.test(core)) hit = DICT[core.replace(/\s+/g, ' ').trim()];
    if (hit != null) return lead + hit + tail;

    /* Korean date: 2026년 11월 27일 -> November 27, 2026 */
    var dt = /^(\d{4})\s*년\s*(\d{1,2})\s*월\s*(\d{1,2})\s*일$/.exec(core);
    if (dt) {
      var MO = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      var mm = parseInt(dt[2], 10);
      if (mm >= 1 && mm <= 12) return lead + MO[mm - 1] + ' ' + parseInt(dt[3], 10) + ', ' + dt[1] + tail;
    }

    /* money in Korean format: 81만 원 / 2,980,750원  ->  {0} template */
    var money = takeMoney(core);
    if (money.map.length) {
      var tpl = money.text;
      var th = DICT[tpl];
      if (th == null && /\s{2,}|\n/.test(tpl)) th = DICT[tpl.replace(/\s+/g, ' ').trim()];
      if (th == null && /^\{0\}$/.test(tpl.trim())) th = '{0}';
      if (th != null) return lead + putMoney(th, money.map) + tail;
      for (var mi = 0; mi < PATTERNS.length; mi++) {
        var mo = applyPattern(tpl, PATTERNS[mi]);
        if (mo != null) return lead + putMoney(mo, money.map) + tail;
      }
      var mseg = trSegments(tpl);
      if (mseg != null) return lead + putMoney(mseg, money.map) + tail;
    }
    for (var i = 0; i < PATTERNS.length; i++) {
      var pout = applyPattern(core, PATTERNS[i]);
      if (pout != null) return lead + pout + tail;
    }
    var seg = trSegments(core);
    if (seg != null) return lead + seg + tail;
    report(core);
    return raw;
  }


  /* Korean money -> token template; values are formatted as ₩1,234,567 */
  function won(n) { return (n < 0 ? '−₩' : '₩') + Math.abs(n).toLocaleString('en-US'); }
  function takeMoney(core) {
    var map = [];
    var out = core.replace(/([\d,]+)\s*억(?:\s*([\d,]+)\s*만)?(?:\s*([\d,]+))?\s*원/g, function (all, a, b, c) {
      var n = parseInt(a.replace(/,/g, ''), 10) * 100000000 +
        (b ? parseInt(b.replace(/,/g, ''), 10) * 10000 : 0) +
        (c ? parseInt(c.replace(/,/g, ''), 10) : 0);
      map.push(won(n));
      return '{' + (map.length - 1) + '}';
    });
    out = out.replace(/([\d,]+)\s*만(?:\s*([\d,]+))?\s*원/g, function (all, a, b) {
      var n = parseInt(a.replace(/,/g, ''), 10) * 10000 + (b ? parseInt(b.replace(/,/g, ''), 10) : 0);
      map.push(won(n));
      return '{' + (map.length - 1) + '}';
    });
    out = out.replace(/([+\-\u2212]?[\d,]+)\s*원/g, function (all, a) {
      var raw = a.replace(/\u2212/g, '-').replace(/,/g, '');
      var num = parseInt(raw, 10);
      map.push(isFinite(num) ? won(num) : a);
      return '{' + (map.length - 1) + '}';
    });
    return { text: out, map: map };
  }
  function putMoney(s, map) {
    return s.replace(/\{(\d+)\}/g, function (all, i) { return map[+i] != null ? map[+i] : all; });
  }

  /* A small unit: dictionary hit or pattern hit, no whitespace trimming. */
  function lookupSmall(unit) {
    var hit = DICT[unit];
    if (hit != null) return hit;
    for (var i = 0; i < PATTERNS.length; i++) {
      var pout = applyPattern(unit, PATTERNS[i]);
      if (pout != null) return pout;
    }
    return null;
  }

  function trPipe(line) {
    var parts = line.split(/\s*\|\s*/);
    var out = [];
    for (var i = 0; i < parts.length; i++) {
      var t = lookupSmall(parts[i].trim());
      if (t == null) return null;
      out.push(t);
    }
    return out.join(' | ');
  }

  /* piece lookup: dictionary, patterns, money token, or bare number/unit */
  function piece(unit) {
    var u = unit.trim();
    if (!u) return '';
    if (!HANGUL.test(u)) return u;
    if (/^\{\d+\}$/.test(u)) return u;
    var t = lookupSmall(u);
    if (t != null) return t;
    return null;
  }

  var SEG_SPLIT = /\s*(\s·\s|\s→\s|\s:\s|\s\/\s)/;
  function trSplit(line) {
    var parts = line.split(SEG_SPLIT);
    if (parts.length < 3) return null;
    var out = [];
    for (var i = 0; i < parts.length; i++) {
      if (i % 2) { out.push(parts[i]); continue; }
      var t = piece(parts[i]);
      if (t == null) return null;
      out.push(t);
    }
    return out.join('');
  }

  function trSegments(core) {
    if (core.indexOf('\n') > -1) {
      var lines = core.split('\n');
      var out = [];
      for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        if (!line.trim()) { out.push(line); continue; }
        var t = line.indexOf('|') > -1 ? trPipe(line) : piece(line);
        if (t == null) t = trSplit(line);
        if (t == null) { if (root.__I18N_DEBUG) (root.__I18N_SEGFAIL = root.__I18N_SEGFAIL || []).push(line); return null; }
        out.push(t);
      }
      return out.join('\n');
    }
    if (core.indexOf('|') > -1) return trPipe(core);
    if (/[·:→]/.test(core) && /\s/.test(core)) return trSplit(core);
    return null;
  }

  /* ---------- DOM walking ---------- */
  function skipped(el) {
    while (el) {
      if (el.nodeType === 1) {
        if (SKIP_TAG[el.tagName]) return true;
        if (el.getAttribute && (el.hasAttribute('data-i18n-skip') || el.getAttribute('contenteditable') === 'true')) return true;
        if (el.classList && el.classList.contains('onetap-lang')) return true;
      }
      el = el.parentNode;
    }
    return false;
  }

  function trText(node) {
    var v = node.nodeValue;
    if (!v || !HANGUL.test(v)) return;
    var out = tr(v);
    if (out !== v) {
      records.push({ n: node, v: v });
      node.nodeValue = out;
    }
  }

  function trAttrs(el) {
    var i, at, v, out;
    for (i = 0; i < ATTRS.length; i++) {
      at = ATTRS[i];
      if (!el.hasAttribute(at)) continue;
      v = el.getAttribute(at);
      if (!v || !HANGUL.test(v)) continue;
      out = tr(v);
      if (out !== v) {
        records.push({ e: el, a: at, v: v });
        el.setAttribute(at, out);
      }
    }
    if (el.tagName === 'INPUT' && el.hasAttribute('value') && el.type !== 'checkbox' && el.type !== 'radio' && el.type !== 'hidden') {
      v = el.getAttribute('value');
      if (v && HANGUL.test(v)) {
        out = tr(v);
        if (out !== v) {
          records.push({ e: el, a: 'value', v: v });
          el.setAttribute('value', out);
          if (el.value === v) el.value = out;
        }
      }
    }
    if (el.tagName === 'INPUT') {
      var ty = (el.type || '').toLowerCase();
      if (ty === 'button' || ty === 'submit' || ty === 'reset') {
        v = el.value;
        if (v && HANGUL.test(v)) {
          out = tr(v);
          if (out !== v) { records.push({ e: el, a: 'value', v: v }); el.value = out; }
        }
      }
    }
  }

  function walk(node) {
    if (node.nodeType === 3) { trText(node); return; }
    if (node.nodeType !== 1) return;
    if (node.tagName !== 'SCRIPT' && node.tagName !== 'STYLE' && node.tagName !== 'SVG' &&
        !(node.classList && node.classList.contains('onetap-lang'))) trAttrs(node);
    if (skipped(node)) return;
    if (node.tagName === 'META') return;
    for (var c = node.firstChild; c; c = c.nextSibling) walk(c);
  }

  function trMeta() {
    var list = doc.querySelectorAll('meta[name="description"], meta[property="og:title"], meta[property="og:description"], meta[name="twitter:title"], meta[name="twitter:description"]');
    for (var i = 0; i < list.length; i++) {
      var el = list[i], v = el.getAttribute('content');
      if (v && HANGUL.test(v)) {
        var out = tr(v);
        if (out !== v) { records.push({ e: el, a: 'content', v: v }); el.setAttribute('content', out); }
      }
    }
  }

  function trJsonLd() {
    var list = doc.querySelectorAll('script[type="application/ld+json"]');
    for (var i = 0; i < list.length; i++) {
      var el = list[i];
      try {
        var data = JSON.parse(el.textContent);
        var changed = fixJson(data);
        if (changed) el.textContent = JSON.stringify(data);
      } catch (e) { /* leave as is */ }
    }
  }

  function fixJson(o) {
    var changed = false, i;
    if (Array.isArray(o)) {
      for (i = 0; i < o.length; i++) if (fixJson(o[i])) changed = true;
      return changed;
    }
    if (!o || typeof o !== 'object') return false;
    for (var key in o) {
      if (!Object.prototype.hasOwnProperty.call(o, key)) continue;
      var v = o[key];
      if (typeof v === 'string' && HANGUL.test(v)) {
        var out = DICT[v.trim()];
        if (out != null) { o[key] = out; changed = true; }
      } else if (v && typeof v === 'object') {
        if (fixJson(v)) changed = true;
      }
    }
    return changed;
  }

  /* ---------- apply / restore ---------- */
  function applyBlocks() {
    var list = doc.querySelectorAll('[data-i18n-block]');
    for (var i = 0; i < list.length; i++) {
      var el = list[i], id = el.getAttribute('data-i18n-block');
      if (!BLOCKS[id] || el.__i18nOrig != null) continue;
      el.__i18nOrig = el.innerHTML;
      el.innerHTML = BLOCKS[id];
    }
  }
  function restoreBlocks() {
    var list = doc.querySelectorAll('[data-i18n-block]');
    for (var i = 0; i < list.length; i++) {
      var el = list[i];
      if (el.__i18nOrig != null) { el.innerHTML = el.__i18nOrig; el.__i18nOrig = null; }
    }
  }

  function applyEn() {
    var title = root.__onetapTitle || (root.__onetapTitle = doc.title);
    applyBlocks();
    walk(doc.body);
    trMeta();
    trJsonLd();
    doc.documentElement.lang = 'en';
    var t = DICT[title] || DICT[title.trim()];
    doc.title = t || title;
  }

  function restoreKo() {
    for (var i = records.length - 1; i >= 0; i--) {
      var r = records[i];
      if (r.n) { if (r.n.nodeValue !== r.v) r.n.nodeValue = r.v; }
      else if (r.e) {
        if (r.a === 'value') { if (r.e.value !== r.v) r.e.value = r.v; }
        else if (r.e.getAttribute(r.a) !== r.v) r.e.setAttribute(r.a, r.v);
      }
    }
    records.length = 0;
    restoreBlocks();
    var title = root.__onetapTitle;
    if (title) doc.title = title;
    doc.documentElement.lang = 'ko';
  }

  /* ---------- language switch UI ---------- */
  function buildSwitch() {
    var wrap = doc.createElement('div');
    wrap.className = 'onetap-lang';
    wrap.setAttribute('role', 'group');
    wrap.innerHTML = '<button type="button" data-onetap-lang="ko" aria-pressed="true">KO</button>' +
      '<button type="button" data-onetap-lang="en" aria-pressed="false">EN</button>';
    var box = doc.querySelector('.top-actions') || doc.querySelector('.topbar__inner') ||
      doc.querySelector('.topbar-inner') || doc.querySelector('.topbar-in') ||
      doc.querySelector('.top-badges') || doc.querySelector('.top-in') ||
      doc.querySelector('.topbar') || doc.querySelector('header');
    if (box) {
      if (box.classList.contains('top-badges')) box.insertBefore(wrap, box.firstChild);
      else if (box.classList.contains('top-actions')) box.insertBefore(wrap, box.firstChild);
      else {
        var act = box.querySelector('.top-actions');
        if (act) box.insertBefore(wrap, act); else box.appendChild(wrap);
      }
    } else {
      wrap.style.cssText = 'position:fixed;top:10px;right:10px;z-index:99999;background:rgba(255,255,255,.9);color:#111';
      doc.body.appendChild(wrap);
    }
    wrap.addEventListener('click', function (ev) {
      var b = ev.target.closest('[data-onetap-lang]');
      if (!b) return;
      setLang(b.getAttribute('data-onetap-lang'));
    });
    return wrap;
  }

  var CSS = '.onetap-lang{display:inline-flex;flex:none;align-items:center;padding:2px;border:1px solid currentColor;border-radius:999px;opacity:.72;transition:opacity .15s;vertical-align:middle;align-self:center}' +
    '.onetap-lang:hover,.onetap-lang:focus-within{opacity:1}' +
    '.onetap-lang button{appearance:none;-webkit-appearance:none;border:0;background:transparent;color:inherit;font:inherit;font-size:10.5px;font-weight:700;letter-spacing:.04em;line-height:1;padding:5px 6px;border-radius:999px;cursor:pointer;min-width:26px;text-align:center}' +
    '.onetap-lang button[aria-pressed="true"]{background:rgba(128,128,128,.3)}' +
    '@media (max-width:520px){.onetap-lang button{padding:4px 4px;font-size:10px;min-width:22px}.onetap-lang{margin-left:2px}}' +
    'html[lang="en"] .unit,html[lang="en"] .won{margin-left:4px}';

  function injectCss() {
    var s = doc.createElement('style');
    s.id = 'onetap-lang-css';
    s.textContent = CSS;
    (doc.head || doc.documentElement).appendChild(s);
  }

  function paintSwitch() {
    var bs = doc.querySelectorAll('[data-onetap-lang]');
    for (var i = 0; i < bs.length; i++) {
      bs[i].setAttribute('aria-pressed', bs[i].getAttribute('data-onetap-lang') === state.lang ? 'true' : 'false');
    }
    var wrap = doc.querySelector('.onetap-lang');
    if (wrap) wrap.setAttribute('aria-label', state.lang === 'ko' ? '언어' : 'Language');
  }

  /* ---------- observe ---------- */
  function startObserver() {
    if (observer || !root.MutationObserver) return;
    observer = new MutationObserver(function (muts) {
      if (state.lang !== 'en') return;
      for (var i = 0; i < muts.length; i++) {
        var m = muts[i];
        if (m.type === 'characterData') { trText(m.target); continue; }
        if (m.type === 'attributes') { if (m.target.nodeType === 1 && !skipped(m.target)) trAttrs(m.target); continue; }
        for (var j = 0; j < m.addedNodes.length; j++) {
          if (m.addedNodes[j].nodeType === 1 && m.addedNodes[j].hasAttribute && m.addedNodes[j].hasAttribute('data-i18n-block')) applyBlocks();
          walk(m.addedNodes[j]);
        }
      }
    });
    observer.observe(doc.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ['placeholder', 'aria-label', 'title', 'alt'] });
  }

  function setLang(lang) {
    state.lang = lang === 'en' ? 'en' : 'ko';
    try { root.localStorage.setItem(LANG_KEY, state.lang); } catch (e) { /* private mode */ }
    if (state.lang === 'en') {
      applyEn();
      startObserver();
    } else {
      if (observer) { observer.disconnect(); observer = null; }
      restoreKo();
    }
    paintSwitch();
    try { doc.dispatchEvent(new CustomEvent('onetap:lang', { detail: { lang: state.lang } })); } catch (e) { /* old */ }
  }

  function boot() {
    injectCss();
    buildSwitch();
    state.lang = detect();
    if (state.lang === 'en') {
      applyEn();
      startObserver();
    } else {
      doc.documentElement.lang = 'ko';
    }
    paintSwitch();
    root.ONETAP_I18N = {
      lang: function () { return state.lang; },
      setLang: setLang,
      t: tr,
      missing: function () { return missingList.slice(); },
      dict: DICT
    };
    try { doc.dispatchEvent(new CustomEvent('onetap:lang', { detail: { lang: state.lang } })); } catch (e) { /* old */ }
  }

  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', boot);
  else boot();
})(window, document);
