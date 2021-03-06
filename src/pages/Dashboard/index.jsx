import React, { useState } from 'react';
import styles from './index.module.scss';
import { ResponsiveGrid, Button } from '@alifd/next';

function Dashboard() {
  const { Cell } = ResponsiveGrid;
  const list1 = [
    {
      title: '关于修改系统用户登录密码的通告',
      time: '2021年11月10日',
      content: () => {
        return (
          <div className={styles.text}>
            <p>为提升系统安全，保证用户的隐私和权益，根据我市网络安全相关要求，北京市出租汽车服务管理系统将更新密码规则，提高用户登录密码的复杂度。</p>
            <p>自2021年11月11日起，北京市出租汽车服务管理系统将修改密码规则为：用户登录密码至少包含8位，必须含有大写字母、小写字母、特殊符号和数字。对不符合密码规则的驾驶员账户，需在登录后根据系统提示按规则修改密码，即可正常登入使用系统。对不符合密码规则的巡游出租企业和个体出租汽车管理部门账户，系统已将原密码统一重置为符合规则的新密码。新密码已通过电话或微信通知相关联系人。为保护企业隐私和权益，巡游出租企业和个体出租汽车管理部门使用新密码登录后，须按规则修改密码即可正常登入使用系统。</p>
          </div>
        );
      },
    },
    {
      title: '关于恢复出租汽车驾驶员、经营性道路旅客 运输驾驶员从业资格考试的通告',
      time: '2021年09月06日',
      content: () => {
        return (
          <div className={styles.text}>
            <p>随着疫情形势的好转,自2021年9月8日起，恢复出租汽车驾驶员、经营性道路旅客运输驾驶员从业资格考试，具体事项通告如下：</p>
            <p className={styles.bold}>一、考试工作安排</p>
            <p className={styles.bold}>(一)出租汽车驾驶员从业资格考试</p>
            <p>1.停考前已经约考的考生，按照交通职业资格中心(交通运输考试中心)电话通知的时间参加考试,考场调整安排见(附件1)。</p>
            <p>2.新报名的考生，自9月8日起可以在《北京市出租汽车服务管理系统》(http://cz.jtw.beijing.gov.cn)进行信息审核，审核合格、预约办理后，自行打印《出租汽车驾驶员从业资格考试申请表》，携带申请表要求的材料，按照预约的时间和地点办理约考手续。</p>
            <p>3.补考考生，不需网上预约，可直接到约考点办理约考手续。</p>
            <p className={styles.bold}>(二)经营性道路旅客运输驾驶员从业资格考试</p>
            <p>1.已经受理的考生，可持相关材料，到交通职业资格中心(交通运输考试中心)办理约考手续。</p>
            <p>办理时间：9月约考时间为9月13日—9月17日；
              10月约考时间为10月18日—10月22日。
            </p>
            <p>2.临时调整旅客急救考试方式。按照本市新冠肺炎防疫要求，减少考生聚集和接触，旅客急救实操考试暂时改为纸质试卷考试，考试内容不变，考试时请携带黑色或蓝色签字笔或钢笔。复习资料参考《客运考试补充资料》中“伤员急救”内容。关注北京市交通运输职业资格事务中心微信公众号“信息查询”栏。</p>
            <p className={styles.bold}>二、疫情防控相关要求</p>
            <p>1.在考试前14天及考试期间避免参加聚会、聚餐等聚集性活动，减少进入人员密集的公共场所，乘坐公共交通工具时要做好个人防护。</p>
            <p>2.佩戴防护用品。考试期间考生必须佩戴好口罩，除了在考生人脸识别、核实身份等环节可根据现场工作人员指示摘除口罩外，考生必须全程佩戴口罩。</p>
            <p>3.考生进入候考区后，严格按照考务工作人员安排就座候考，减少不必要的走动，避免出现扎堆情况。考试结束后必须服从考务工作人员的管理，按指引迅速离开考场，不得逗留。</p>
            <p>4.考试当天体温正常且“北京健康宝”无异常的考生方可进入考点参加考试，如有异常者需进行评估后确定是否参加考试。</p>
            <p>5.考生考试前应当签订《新冠肺炎疫情防控告知暨承诺书》(见附件2)</p>
            <p>6.考生应持72小时内核酸检测阴性证明参加考试。</p>
          </div>
        );
      },
    },
    {
      title: '关于暂停出租汽车驾驶员、经营性道路旅客运输驾驶员约考和考试工作的通知',
      time: '2021年08月15日',
      content: () => {
        return (
          <div className={styles.text}>
            <p>各位考生：</p>
            <p>近期,国内多地相继发生聚集性疫情，本市再次出现京外关联本地病例，北京疫情防控形势严峻。为控制人员过度聚集，减少人员频繁流动风险，切实保障广大办事人员和考生健康安全，自2021年8月16日起，暂停出租汽车驾驶员(巡游车、网约车)、经营性道路旅客运输驾驶员约考和考试业务，恢复时间将根据我市疫情防控情况，通过市交通委网站、12328服务热线、北京市出租汽车服务管理系统、考试中心微信公众号等渠道另行通知，由此带来的不便，请您理解和支持！ </p>
          </div>
        );
      },
    },
  ];
  const list2 = [
    {
      title: '第一章总则',
      content: () => {
        return (
          <div className={styles.text}>
            <p>第一条为加强城市客运出和汽车管理，提高容运出租汽年服务质量，保障乘容、用户和客运出租汽车经营企业、个体业广(以下简称经营 者)及其从业人员的合法权益，根据有关法律，法规，结合本市实际，制定本条例。</p>
            <p>第二条本条例所称的出租汽车，是指按照乘客和用户意愿提供客运服务或者年辆租 赁服务的客车。客运服务是指按照乘容意愿提供运送服务，并且按照里程和时问收费的出租汽车经营活动。车辆租赁是指向用户出租不配备驾驶员的客运车辆，并且按照时间收费的出租汽车经营活动。</p>
            <p>第三条本条例适用于本市城区客运出租汽车的管理。</p>
            <p>第四条市公用事业行政管理部门是本市城区 客运出租汽车的行政主管部门，其所属的市客运出租汽车管理机构负责本市城区出租汽车的监督、管理，依法查处违反本条例的行为。公安行政管理部门负责本市城区客运出租汽车的治安管理。交通、工商、物价、技术监督、城建、规划、税务、环保、财政等部门应当按照各自职责，协同实施本条例。</p>
            <p>第五条客运出租汽车行业发展应当纳入全市经济、社会发展计划，并根据实际需要，对客运出租汽车行业发展规模、数量和车型实施宏观控制。市公用事业行政管理部门，应当依据全市经济、社会发展总体规划和计划，会同有关部门编制客运出租汽车的发展规划以及客运出租汽车的数量、乘降点及停车场(站)的年度发展计划，报市人民政府批准后执行。</p>
            <p>第六条客运出租汽车行业应当实行统一管理、合法经营、公平竞年、方便群众的原则。客运出租汽车的营运定额和税费标淮，应当按照国家、省和本市有关规定执行。</p>
            <p>第七条市公用事业行政管理部门、客运出租汽车管理机构及工作人员应当依法管理，乘公办事，依法维护经营者、乘客、用户和从业人员的合法权益。</p>
          </div>
        );
      },
    },
    {
      title: '第二章经营资质管理',
      content: () => {
        return (
          <div className={styles.text}>
            <p>第八条本市客运出租汽车经营权实行有偿出让和转让，取得客运出租汽车经营权，并办理有关手续后，方可从事客运出租汽车经营活动。经营者所取得的客运出租汽车经营权，在正式营运半年后，经客运出租汽车管理机构批淮，方可有偿较让。经营权使用期满，由市人民政府无偿收回。客运出租汽车经营权的使用期限、有偿出让、转让的方式、标准由市人民政府制定。</p>
            <p>第九条取得客运出租汽车经营权的企业，应当具备下列条件:</p>
            <p>(一)有符合规定数量和质量要求的客运车辆和相应的资金；</p>
            <p>(二)有符合规定要求的停车场地和经营场所；</p>
            <p>(三)有达到规定标准的管理人员和驾驶员；</p>
            <p>(四)有与经告方式相适应的经苔管理制度；</p>
            <p>(五)能独立承担民事责任；</p>
            <p>(六)符合其他有关规定的条件。</p>
            <p>第十条取得客运出租汽车经营权的个体业户，应当具各下列条件;</p>
            <p>(一)有符合规定要求的客运车辆和相应的资金；</p>
            <p>(二)有符合规定要求的停车场地；</p>
            <p>(三)有达到规定标准的驾驶员；</p>
            <p>(四)符合其他有关规定的条件。</p>
            <p>第十一条客运出租汽车驾驶员，应当具备下列条件;</p>
            <p>(—)有本市常佳户籍或者暂住证;</p>
            <p>(二)具有初中以上文化程度;</p>
            <p>(三)有公安部门核发的机动车驾典证，驾龄满2年以上;</p>
            <p>(四)经客运服务培训合格，领取 《客运出租汽车驾驶员准驾证”。被取消营运资格的客运出租汽车驾驶员，从取消之日起3年内不得从事客运出租汽车经营活动。</p>
            <p>第十二条取得客运出租汽车经营权的经营者，按下列程序办理经营手续;</p>
            <p>(一)企业持营运申请报告，公民持户口簿、居民身份证向客运出租汽车管理机构提出中请；</p>
            <p>(二)持市客运出租汽车管理机构核发的经营权使用证和客运出租汽车审批表，到有关部门办理车辆牌照、营业执照、税务登记等;</p>
            <p>(三)到客运出租汽车管理机构领取 《城市公共客运交通苔运证》。未办理以上手续的，不得从事客运出租汽车经营活动。客运出租汽车管理机构接到客运申请报告后，应当在5日内做出审核决定，并书面通知本人。</p>
            <p>第十三条经营者停业、欲业的，应当凭市客运出租汽车管理机构的证明，到有关部门办理相关手续并缴回有关证照。未经批淮，停业6个月以上的按歇业处理。</p>
            <p>第十四条 《城市公共客运交通营运证%，&客运出租汽车驾驶员准驾证》不得转借、涂改、伪造和买卖。</p>
            <p>第十五条客运出租汽车经营者、从业人员的资质、资格及芳运车辆实行年度审验。未按规定参加年度审验或者审验不合格的，不得从事客运出租汽车经营活动。</p>
            <p>第十六条市客运出租汽车管理机构应当建立健全管理目标责任制，加强对客运出租汽车经营者、从业人员的管理。</p>
          </div>
        );
      },
    },
    {
      title: '第三章客运服务管理',
      content: () => {
        return (
          <div className={styles.text}>
            <p>第十七条市公用事业行政管理部门应当制定客运出租汽车停车场(站)管理制度和规范。出租汽车停车场(站)和乘降点的设置，应当符合城市规划的要求。</p>
            <p>第十八条客运出租汽车实行扬手招车、预约订车和站点租乘等方式，为乘客提供提供方便,及时、安全、文明的规范化服务。本市城区和外县(市)之间的客运出租汽车不受行政区域的限制，可实行直达服务，但不得异地经营。</p>
            <p>第十九条客运出租汽车经营者应当遵守下列规定;</p>
            <p>(—)执行由物价部门会同公用事业行政管理部门制定的收费标准，并使用市客运出租汽年管理机构会同税务部门印制的票据，不得乱收费；</p>
            <p>(二)按规定缴纳有关稅费；</p>
            <p>(三)未经客运出租汽车管理机构批准，不得将出租汽车改作他用；</p>
            <p>(四)按时向客运出租汽车管理机构填报有关报表，如实报送营运资料，接受对营运资料的审查；</p>
            <p>(五)遇有抢险救灾等特殊情況，应当服从客运出租汽车管理机构的统一调度指挥;</p>
            <p>(六)依法与承租者、从业人员签订有关合同，明确双方权利义务。</p>
            <p>第二十条从事营运活动的客运出租汽车驾驶员应当遊守下列規定;</p>
            <p>(一)按规定携带营运证件；</p>
            <p>(二)按照乘容要求的合理路线行驶，按计价器显示金额收费并付给票据，遇有计价器损坏、失准、显示不全或无票据时，不得告运载容；</p>
            <p>(三)不得将客运出租汽车交给非本车驾驶人员驾驶；</p>
            <p>(四)不得隐監乘容遗失财物；</p>
            <p>(五)不得拒绝载客或以 编、威胁等方式强行拉客;</p>
            <p>(六)不得利用车辆进行违法犯罪活动，发现有违法犯罪嫌疑的，应当及时报告公安机关;</p>
            <p>(七)遵守客运服务规范的其他规定。</p>
            <p>第二十一条客运出租汽车驾驶员不得拒绝乘客合理的服务要求。有下列行为之一的属拒载的行为;</p>
            <p>(—)所驾驶的车辆开启空车标志灯后，遇乘客扬手招车停车后不载客的;</p>
            <p>(二)所生致的年網开启李作标志灯后，在停车场内不服从调派的。</p>
            <p>(三)在客运集散点或路边待租时不载客的;</p>
            <p>(四)载客营运途中无正当理由中断服务的。</p>
            <p>第二十二条客运出租汽车经营者、从业人员的权益受法律保护。任何部门、单位和个人不得向经营者、从业人员乱收费、乱推派、乱罚款、乱扣营运证照和标志。</p>
            <p>第二十三条客运出租汽车经营者、从业人员应当遵寸法律、法规，不得利用客运出租汽车扰乱社会秩序，妨得客运出租汽车的正常经营活动。</p>
            <p>第二十四条客运出租汽车必须达到下列要求;</p>
            <p>(一)车辆技术性能完好，车身、车箱、座垫(套)和行李箱整洁；</p>
            <p>(二)车顶装置统一编号的标志灯，夜间明亮；</p>
            <p>(三)按规定装置计价器和防粉设施;</p>
            <p>(四)营运证件、车辆专用牌照和车门两侧的行业标志，营运编号以及空车标志灯清哳、有效;</p>
            <p>(五)在车相内规定位置设置标明企业名称、经营者、从业人员姓名、收费标淮、监督电话号码、车牌号码等服务标志。</p>
            <p>第上十五条客运出租汽车应装置由技术监督部门鉴定合格的计价器;计价器安装、维修企业由公用事业行政管理部门和技术监督部门共同认定。其他任何单位和个人不得擅自安装、维修、调试计价器。</p>
            <p>第二十六条末经有关部门审核批准，不得擅自改变客运出租汽车的车型、车体颜色和牌照号码或擅自拆除、改动出租汽车客运服务设施、标志。</p>
            <p>第二十七条乘客应文明乘车并遵守下列规定;</p>
            <p>(一)不在车辆遇红灯停驶时上、下车或在禁止停车的地方拦车；</p>
            <p>(二)不污损车辆和车内设施;</p>
            <p>(三)不携带易燃易爆等危险品乘车;</p>
            <p>(四)醉酒者和精神病患者乘车时须有人监护；</p>
            <p>(五)按照规定的标淮支付车费系有关费用。</p>
            <p>第二十八条乘客遇有 下列情况之一时可拒绝支付车费;</p>
            <p>(—)租乘的客运出租汽车无计价器或者不使用计价器的;</p>
            <p>(二)驾驶员拒付车费发票的;</p>
            <p>(三)租乘的客运出租汽车在起步里程内发生故障，无法完成运送服务的;</p>
            <p>(四)未经乘客允许，搭载他人或者办理与客运无关的事的。</p>
            <p>第二十九条从事车辆租赁服务业务，应当经市客运出租汽车管理机构批准。</p>
            <p>客运车辆租赁服务的具体管理办法，由市人民政府制定。</p>
          </div>
        );
      },
    },
    {
      title: '第四章检杳与投拆管理',
      content: () => {
        return (
          <div className={styles.text}>
            <p>第三十条公用事业、公安、工商等行政管理部门和客运出租汽车管理机构及其管理人员在执行公务时，应当佩戴值勤标志，出示证件，不得越权执法。</p>
            <p>第三十一条市客运出租汽车管理机构和客运出租汽车经营企业应当建立投诉受理监督制度，设置投诉电话，接受对违反本条例行为的投诉和社会脸督。乘客投诉时应当提供车费发票、车辆牌照号码等有关证据。</p>
            <p>第三卡二条市客运出租汽车管理机构接受投诉后，应当在接受之日起 15 日内处理完毕，情況复杂的,可以在 30日内处理完华。客运出租汽车经营企业接受投诉后，应当在接受之日起10日内作出答复。乘容对答交有异议的，可以向有关部门投诉。</p>
            <p>第三十三条客运出租汽车驾驶员发生违反本条例行为或者被投诉后，其所在经背企业应当在规定期限内到客运出租汽车管理机构接受调查。</p>
            <p>第三十四条违反本条例的，按下列规定子以处罚。构成犯罪的，依法追究刑事责任。</p>
            <p>(一)违反第八条炾定，未取得经营权和经营权使用期满后樂续从事营运活动的，责令停止违法行为，没收全部违法所得，并处5000 元至 10000 元的罚款;</p>
            <p>(二)违反第十二条第二款规定，末办理客运出租汽车营运手续的，责令其补办手续，并处 2000元至 5000 元的罚款;</p>
            <p>(三)违反第十四条观定，转借、涂改、份造、买卖《城市公共客运交通营运证》《客运出租汽车驾驶员准驾证》的，缴销证件，并处5000 至 10000 元罚款;</p>
            <p>(四)违反第十九第(一)项规定，乱收费的，除退还多收款外，给子答告，并处 1000 元至 3000元罚款;</p>
            <p>(五)违反第十九系第(二)项规定的公 责令限期补缴税费，并投有关法律、法规处理；</p>
            <p>(六)违反第十九条第(三)项、第(四)项、第(五)项规定之一的，责令其改正，并处 500 元至 1000元罚款;</p>
            <p>(七)违反第十九条第(六)项规定，未依法与从业人员签订合同的，处1000 元至 2000 元罚款，</p>
            <p>(八)违反第二十条第(一)项规定，不携带营运证件的，处200 元至 300 元罚款;</p>
            <p>(九)违反第二十条第(二)项规定，未按计价器显示金额收费的，责令退还至收的车费，向乘客赔礼道歉，并处1000 元至 2000 元罚款;</p>
            <p>(十)违反第二十条第(三)项规定，将车钢交非本车驾驶人员驾驶的，处1000 元至 1500 元罚款;</p>
            <p>(十一)违反第二十条第(四)项、第(五)项、第(六)项规定之一的，按存关法律、法规的规定处罚；</p>
            <p>(十二)违反第二十条第(四)项、第(五)项、第(六)项规定之一的，按有关法律、法规的规定处罚;</p>
            <p>(十三)违反第二十一条规定，拒载的，责令其赔礼道歉，赔偿乘客损失，并处 100 元至 300元罚款;</p>
            <p>(十三)违反第二十二条规定，向经营者、从业人员乱收费、乱推派、乱罚款、乱扣营运证照和标志的，除责令其退还乱收费用、证照和标志外，并由上级主管部门或监察部门给子行政处分。对上述违法行为，经营者、从业人员可拒绝执行，并向有关部门投诉;</p>
            <p>(十四)违反第二十三条规定，利用客运出租汽车扰乱社会秩序，妨碍客运出租汽车正常经营活动的，给子警告，直至吊销 《城市巫共客运交通营运证》、《客运出租汽车驾驶员准驾证》;</p>
            <p>(十五)违反第二士四条规定之一的，责令其改正，并处200元至 500 元罚款;</p>
            <p>(十六)违反第二十五条规定，控自安装、维修、调试计价器的，责令其改正，并处 1000 元至 5000 元骨款;</p>
            <p>(十七)违反第三十一条第一款、第三士三条第二款规定，企业对投诉置之不理或未按规定期限作出答复的，处1000元至 3000 元罚款。</p>
            <p>第三十五条当事人对行政处罚不服的，可以依照法律、法规的有关规定申请行政复议或者向人民法院起诉。</p>
            <p>第三十六条客运管理人员或者有关行政管理人员违反本条例，滥用职权、徇私舞弊、玩忽职守的，由其所在单位或者上级主管机关给子行政处分;构成犯罪的，依法追究刑事责任。</p>
          </div>
        );
      },
    },
  ];
  const [current, setCurrent] = useState(0);
  const [render, setRender] = useState();
  const getDetail = (index) => {
    setCurrent(1);
    setRender(list1[index].content);
  };
  const getDetail2 = (index) => {
    setCurrent(1);
    setRender(list2[index].content);
  };
  return (
    <ResponsiveGrid>
      {
        current === 0 &&
        <>
          <Cell colSpan={12}>
            <div className={styles.title}>公告栏</div>
          </Cell>
          <Cell colSpan={12}>
            {
          list1.map((item, index) => {
            return (
              <div className={styles.list} key={index} onClick={() => getDetail(index)}>
                <div className={styles.list_title}>{item.title}</div>
                <div>{item.time}</div>
              </div>
            );
          })
            }
          </Cell>
          <Cell colSpan={12} style={{ marginTop: '20px' }}>
            <div className={styles.title}>公司制度</div>
          </Cell>
          <Cell colSpan={12}>
            {
          list2.map((item, index) => {
            return (
              <div className={styles.list} key={index} onClick={() => getDetail2(index)}>
                <div className={styles.list_title}>{item.title}</div>
                <div>{item.time}</div>
              </div>
            );
          })
            }
          </Cell>
        </>
      }
      {
        current === 1 &&
        <>
          <Cell colSpan={12}>
            <div className={styles.title}>公告查看</div>
          </Cell>
          <Cell colSpan={12}>
            {render}
          </Cell>
          <Cell colSpan={12} style={{ textAlign: 'center', margin: '20px 0' }}>
            <Button type="secondary" onClick={() => setCurrent(0)}>返回</Button>
          </Cell>
        </>
      }
    </ResponsiveGrid>
  );
}

export default Dashboard;
