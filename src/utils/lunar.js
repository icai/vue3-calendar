/* eslint-disable */
"use strict";
 /*publish time:2011-09-09 21:04:04*/
var lunarInfo = new Array(
	19416, 19168, 42352, 21717, 53856, 55632,
	91476, 22176, 39632, 21970, 19168, 42422,
	42192, 53840, 119381, 46400, 54944, 44450,
	38320, 84343, 18800, 42160, 46261, 27216,
	27968, 109396, 11104, 38256, 21234, 18800,
	25958, 54432, 59984, 28309, 23248, 11104,
	100067, 37600, 116951, 51536, 54432, 120998,
	46416, 22176, 107956, 9680, 37584, 53938,
	43344, 46423, 27808, 46416, 86869, 19872,
	42448, 83315, 21200, 43432, 59728, 27296,
	44710, 43856, 19296, 43748, 42352, 21088,
	62051, 55632, 23383, 22176, 38608, 19925,
	19152, 42192, 54484, 53840, 54616, 46400,
	46496, 103846, 38320, 18864, 43380, 42160,
	45690, 27216, 27968, 44870, 43872, 38256,
	19189, 18800, 25776, 29859, 59984, 27480,
	21952, 43872, 38613, 37600, 51552, 55636,
	54432, 55888, 30034, 22176, 43959, 9680,
	37584, 51893, 43344, 46240, 47780, 44368,
	21977, 19360, 42416, 86390, 21168, 43312,
	31060, 27296, 44368, 23378, 19296, 42726,
	42208, 53856, 60005, 54576, 23200, 30371,
	38608, 19415, 19152, 42192, 118966, 53840,
	54560, 56645, 46496, 22224, 21938, 18864,
	42359, 42160, 43600, 111189, 27936, 44448
);

//国历节日 *表示放假日
var sFtv = new Array(
	"0101*元旦 新年",
	"0106 中国第13亿人口日",
	"0108 周恩来逝世纪念日",
	"0115 释迦如来成道日",
	"0121 列宁逝世纪念日 国际声援南非日 弥勒佛诞辰",
	"0202 世界湿地日",
	"0207 二七大罢工纪念日",
	"0210 国际气象节",
	"0214 情人节",
	"0215 中国12亿人口日",
	"0219 邓小平逝世纪念日",
	"0221 国际母语日 反对殖民制度斗争日",
	"0222 苗族芦笙节",
	"0224 第三世界青年日",
	"0228 世界居住条件调查日",
	"0301 国际海豹日",
	"0303 全国爱耳日",
	"0305 学雷锋纪念日 中国青年志愿者服务日",
	"0308 妇女节",
	"0309 保护母亲河日",
	"0311 国际尊严尊敬日",
	"0312 植树节&孙中山逝世纪念日",
	"0314 国际警察日 白色情人节",
	"0315 消费者权益日",
	"0316 手拉手情系贫困小伙伴全国统一行动日",
	"0317 中国国医节 国际航海日",
	"0318 全国科技人才活动日",
	"0321 世界森林日 世界儿歌日 世界睡眠日",
	"0322 世界水日",
	"0323 世界气象日",
	"0324 世界防治结核病日",
	"0325 全国中小学生安全教育日",
	"0329 中国黄花岗七十二烈士殉难纪念",
	"0330 巴勒斯坦国土日",
	"0401 愚人节&全国爱国卫生运动月(四月)",
	"0402 国际儿童图书日",
	"0407 世界卫生日",
	"0411 世界帕金森病日",
	"0421 全国企业家活动日",
	"0422 世界地球日 世界法律日",
	"0423 世界图书和版权日",
	"0424 亚非新闻工作者日 世界青年反对殖民主义日",
	"0425 全国预防接种宣传日",
	"0426 世界知识产权日",
	"0430 世界交通安全反思日",
	"0501*劳动节&国际劳动节",
	"0503 世界哮喘日 世界新闻自由日",
	"0504 青年节&中国五四青年节 科技传播日",
	"0505 碘缺乏病防治日 日本男孩节",
	"0508 世界红十字日",
	"0512 国际护士节",
	"0515 国际家庭日",
	"0517 国际电信日",
	"0518 国际博物馆日",
	"0520 全国学生营养日 全国母乳喂养宣传日",
	"0523 国际牛奶日",
	"0526 世界向人体条件挑战日",
	"0530 中国“五卅”运动纪念日",
	"0531 世界无烟日 英国银行休假日",
	"0601 儿童节&国际儿童节",
	"0605 世界环境保护日",
	"0614 世界献血者日",
	"0617 防治荒漠化和干旱日",
	"0620 世界难民日",
	"0622 中国儿童慈善活动日",
	"0623 国际奥林匹克日",
	"0625 全国土地日",
	"0626 国际禁毒日 国际宪章日",
	"0630 世界青年联欢节",
	"0701 建党节&香港回归纪念日 中共诞辰 世界建筑日",
	"0702 国际体育记者日",
	"0706 朱德逝世纪念日",
	"0707 抗日战争纪念日",
	"0711 世界人口日 中国航海日",
	"0726 世界语创立日",
	"0728 第一次世界大战爆发",
	"0730 非洲妇女日",
	"0801 建军节&中国人民解放军建军节",
	"0805 恩格斯逝世纪念日",
	"0806 国际电影节",
	"0808 中国男子节(爸爸节)",
	"0812 国际青年节",
	"0813 国际左撇子日",
	"0815 抗日战争胜利纪念",
	"0826 全国律师咨询日",
	"0902 日本签署无条件投降书日",
	"0903 中国抗日战争胜利纪念日",
	"0905 瑞士萨永中世纪节",
	"0906 帕瓦罗蒂去世",
	"0908 国际扫盲日 国际新闻工作者日",
	"0909 毛泽东逝世纪念日",
	"0910 教师节&中国教师节 世界预防自杀日",
	"0914 世界清洁地球日",
	"0916 国际臭氧层保护日 中国脑健康日",
	"0918 九·一八事变纪念日",
	"0920 国际爱牙日",
	"0921 世界停火日 预防世界老年性痴呆宣传日",
	"0927 世界旅游日",
	"0928 孔子诞辰",
	"0930 国际翻译日",
	"1001*国庆节&世界音乐日 国际老人节",
	"1002*国庆节假日 国际和平与民主自由斗争日",
	"1003*国庆节假日",
	"1004 世界动物日",
	"1005 国际教师节",
	"1006 中国老年节",
	"1008 全国高血压日 世界视觉日",
	"1009 世界邮政日 万国邮联日",
	"1010 辛亥革命纪念日 世界精神卫生日",
	"1013 世界保健日 国际教师节",
	"1014 世界标准日",
	"1015 国际盲人节(白手杖节)",
	"1016 世界粮食日",
	"1017 世界消除贫困日",
	"1020 世界骨质疏松日",
	"1022 世界传统医药日",
	"1024 联合国日 世界发展新闻日",
	"1028 中国男性健康日",
	"1031 万圣节 世界勤俭日",
	"1102 达摩祖师圣诞",
	"1106 柴科夫斯基逝世悼念日",
	"1107 十月社会主义革命纪念日",
	"1108 中国记者日",
	"1109 全国消防安全宣传教育日",
	"1110 世界青年节",
	"1111 光棍节 国际科学与和平周",
	"1112 孙中山诞辰纪念日",
	"1114 世界糖尿病日",
	"1115 泰国大象节",
	"1117 国际大学生节 世界学生节 世界戒烟日",
	"1120 世界儿童日",
	"1121 世界问候日 世界电视日",
	"1129 国际声援巴勒斯坦人民国际日",
	"1201 世界艾滋病日",
	"1202 废除一切形式奴役世界日",
	"1203 世界残疾人日",
	"1204 全国法制宣传日",
	"1205 国际经济和社会发展志愿人员日 世界弱能人士日",
	"1207 国际民航日",
	"1208 国际儿童电视日",
	"1209 世界足球日 一二·九运动纪念日",
	"1210 世界人权日",
	"1211 世界防止哮喘日",
	"1212 西安事变纪念日",
	"1213 南京大屠杀纪念日",
	"1214 国际儿童广播电视节",
	"1215 世界强化免疫日",
	"1220 澳门回归纪念",
	"1221 国际篮球日",
	"1224 平安夜",
	"1225 圣诞节",
	"1226 毛泽东诞辰纪念日&节礼日",
	"1229 国际生物多样性日"
);

//农历节日 *表示放假日
var lFtv = new Array(
	"0101*春节 大年初一",
	"0102*初二",
	"0115 元宵节",
	"0505*端午节",
	"0707 七夕情人节",
	"0715 中元节",
	"0815*中秋节",
	"0909 重阳节",
	"1208 腊八节",
	"1223 小年",
	"0100*除夕"
);

//某月的第几个星期几
var wFtv = new Array(
	"0150 世界麻风日", //一月的最后一个星期日（月倒数第一个星期日）
	"0351 全国中小学生安全教育日",
	"0453 秘书节",
	"0512 国世界哮喘日",
	"0520 母亲节&国际母亲节 救助贫困母亲日",
	"0530 全国助残日",
	"0532 国际牛奶日",
	"0626 中国文化遗产日",
	"0630 父亲节&国际父亲节",
	"0716 国际合作节",
	"0730 被奴役国家周",
	"0932 国际和平日",
	"0936 全民国防教育日",
	"0940 国际聋人节 世界儿童日",
	"0950 世界海事日 世界心脏病日",
	"1011 国际住房日 世界建筑日 世界人居日",
	"1023 国际减轻自然灾害日(减灾日)",
	"1024 世界视觉日",
	"1144 感恩节",
	"1220 国际儿童电视广播日"
);

var solarMonth = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
var Gan = new Array("\u7532", "\u4e59", "\u4e19", "\u4e01", "\u620a", "\u5df1", "\u5e9a", "\u8f9b", "\u58ec", "\u7678");
var Zhi = new Array("\u5b50", "\u4e11", "\u5bc5", "\u536f", "\u8fb0", "\u5df3", "\u5348", "\u672a", "\u7533", "\u9149", "\u620c", "\u4ea5");
var Animals = new Array("\u9f20", "\u725b", "\u864e", "\u5154", "\u9f99", "\u86c7", "\u9a6c", "\u7f8a", "\u7334", "\u9e21", "\u72d7", "\u732a");
var solarTerm = new Array("\u5c0f\u5bd2", "\u5927\u5bd2", "\u7acb\u6625", "\u96e8\u6c34", "\u60ca\u86f0", "\u6625\u5206", "\u6e05\u660e", "\u8c37\u96e8", "\u7acb\u590f", "\u5c0f\u6ee1", "\u8292\u79cd", "\u590f\u81f3", "\u5c0f\u6691", "\u5927\u6691", "\u7acb\u79cb", "\u5904\u6691", "\u767d\u9732", "\u79cb\u5206", "\u5bd2\u9732", "\u971c\u964d", "\u7acb\u51ac", "\u5c0f\u96ea", "\u5927\u96ea", "\u51ac\u81f3");
var sTermInfo = new Array(0, 21208, 42467, 63836, 85337, 107014, 128867, 150921, 173149, 195551, 218072, 240693, 263343, 285989, 308563, 331033, 353350, 375494, 397447, 419210, 440795, 462224, 483532, 504758);
var nStr1 = new Array("\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d", "\u4e03", "\u516b", "\u4e5d", "\u5341", "\u5341\u4e00", "\u5341\u4e8c");
var nStr2 = new Array("\u521d", "\u5341", "\u5eff", "\u5345", "\u3000");
var monthName = new Array("JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC");

var BG_DATA = {
	"立春": "http://img03.taobaocdn.com/tps/i3/T1JZWnXnJpXXXXXXXX-83-56.jpg",
	"情人节": "http://img01.taobaocdn.com/tps/i1/T17cynXf0sXXXXXXXX-83-56.jpg",
	"妇女节": "http://img01.taobaocdn.com/tps/i1/T1D0enXmJnXXXXXXXX-83-56.jpg",
	"植树节&孙中山逝世纪念日": "http://img03.taobaocdn.com/tps/i3/T1Q0enXlxnXXXXXXXX-83-56.jpg",
	"清明": "http://img04.taobaocdn.com/tps/i4/T1WIWnXmdpXXXXXXXX-83-56.jpg",
	"劳动节&国际劳动节": "http://img04.taobaocdn.com/tps/i4/T1PcunXXltXXXXXXXX-83-56.jpg",
	"青年节&中国五四青年节 科技传播日": "http://img02.taobaocdn.com/tps/i2/T1qZGnXmhrXXXXXXXX-83-56.jpg",
	"儿童节&国际儿童节": "http://img01.taobaocdn.com/tps/i1/T1XqafXepoXXXXXXXX-83-56.jpg",
	"防治荒漠化和干旱日": "http://img02.taobaocdn.com/tps/i2/T1XWafXedoXXXXXXXX-83-56.jpg",
	"\u7236\u4eb2\u8282": "http://img03.taobaocdn.com/tps/i3/T1gGafXd4oXXXXXXXX-83-56.jpg",
	"\u7aef\u5348\u8282": "http://img04.taobaocdn.com/tps/i4/T15synXgXsXXXXXXXX-83-56.jpg",
	"\u4e16\u754c\u4eba\u53e3\u65e5": "http://img02.taobaocdn.com/tps/i2/T109egXeVnXXXXXXXX-83-56.jpg",
	"\u5927\u6691": "http://img01.taobaocdn.com/tps/i1/T10SegXfXnXXXXXXXX-83-56.jpg",
	"\u5efa\u515a\u8282 \u9999\u6e2f\u56de\u5f52\u7eaa\u5ff5\u65e5  \u4e16\u754c\u5efa\u7b51\u65e5": "http://img04.taobaocdn.com/tps/i4/T1NCegXfplXXXXXXXX-83-56.jpg",
	"\u6297\u65e5\u6218\u4e89\u7eaa\u5ff5\u65e5": "http://img03.taobaocdn.com/tps/i3/T1MCegXgtnXXXXXXXX-83-56.jpg",
	"\u5efa\u519b\u8282": "http://img01.taobaocdn.com/tps/i1/T1Er83XbdCXXXXXXXX-83-56.jpg",
	"\u5904\u6691": "http://img04.taobaocdn.com/tps/i4/T1MbN3XeNBXXXXXXXX-83-56.jpg",
	"\u4e03\u5915\u60c5\u4eba\u8282": "http://img03.taobaocdn.com/tps/i3/T12HN3XfpAXXXXXXXX-83-56.jpg",
	"\u6297\u65e5\u6218\u4e89\u80dc\u5229\u7eaa\u5ff5": "http://img02.taobaocdn.com/tps/i2/T1EbJ3Xj8AXXXXXXXX-83-56.jpg",
	"\u6559\u5e08\u8282": "http://img01.taobaocdn.com/tps/i1/T1jselXfhzXXXXXXXX-83-56.gif",
	"\u4e2d\u79cb\u8282": "http://img04.taobaocdn.com/tps/i4/T1BIalXd8zXXXXXXXX-83-56.gif",
	"\u5b54\u5b50\u8bde\u8fb0": "http://img02.taobaocdn.com/tps/i2/T1RIalXkJzXXXXXXXX-83-56.gif",
	"\u4e5d\u4e00\u516b\u4e8b\u53d8\u7eaa\u5ff5\u65e5": "http://img04.taobaocdn.com/tps/i4/T1ucKnXfhrXXXXXXXX-83-56.jpg",
	"\u56fd\u5e86\u8282 \u4e16\u754c\u97f3\u4e50\u65e5 \u56fd\u9645\u8001\u4eba\u8282": "http://img03.taobaocdn.com/tps/i3/T1LAilXjtyXXXXXXXX-83-56.jpg",
	"\u91cd\u9633\u8282 \u56fd\u9645\u51cf\u8f7b\u81ea\u7136\u707e\u5bb3\u65e5(\u51cf\u707e\u65e5)": "http://img04.taobaocdn.com/tps/i4/T1Z0enXkpnXXXXXXXX-83-56.jpg",
	"\u8f9b\u4ea5\u9769\u547d\u7eaa\u5ff5\u65e5 \u4e16\u754c\u7cbe\u795e\u536b\u751f\u65e5": "http://img01.taobaocdn.com/tps/i1/T1lcGnXmRrXXXXXXXX-83-56.jpg",
	"\u611f\u6069\u8282": "http://img02.taobaocdn.com/tps/i2/T1OImnXhtpXXXXXXXX-83-56.jpg",
	"\u5b59\u4e2d\u5c71\u8bde\u8fb0": "http://img02.taobaocdn.com/tps/i2/T1JdenXmXnXXXXXXXX-83-56.jpg",
	"\u6fb3\u95e8\u56de\u5f52\u7eaa\u5ff5": "http://img03.taobaocdn.com/tps/i3/T1LsunXXFtXXXXXXXX-83-56.jpg",
	"\u51ac\u81f3": "http://img03.taobaocdn.com/tps/i3/T1BsunXldrXXXXXXXX-83-56.jpg",
	"\u6bdb\u6cfd\u4e1c\u8bde\u8fb0": "http://img03.taobaocdn.com/tps/i3/T1mIWnXjtpXXXXXXXX-83-56.jpg",
	"\u5723\u8bde\u8282": "http://img01.taobaocdn.com/tps/i1/T1ksGnXfhrXXXXXXXX-83-56.jpg",
	"\u9664\u5915": "http://img04.taobaocdn.com/tps/i4/T1odenXn4nXXXXXXXX-83-56.jpg",
	"\u6625\u8282": "http://img01.taobaocdn.com/tps/i1/T16ZWnXkFpXXXXXXXX-83-56.jpg",
	"\u5143\u5bb5\u8282": "http://img02.taobaocdn.com/tps/i2/T1BIWnXolpXXXXXXXX-83-56.jpg"
};

function lYearDays(C) {
    var A, B = 348;
    for (A = 32768; A > 8; A >>= 1) {
        B += (lunarInfo[C - 1900] & A) ? 1 : 0
    }
    return (B + leapDays(C))
}
function leapDays(A) {
    if (leapMonth(A)) {
        return ((lunarInfo[A - 1900] & 65536) ? 30 : 29)
    } else {
        return (0)
    }
}
function leapMonth(A) {
    return (lunarInfo[A - 1900] & 15)
}
function monthDays(B, A) {
    return ((lunarInfo[B - 1900] & (65536 >> A)) ? 30 : 29)
}
function Lunar(F) {
    var A = "";
    var D, C = 0, B = 0;
    var E = new Date(1900, 0, 31);
    var G = Math.floor((F.getTime() + 2206425600000) / 86400000);
    A += "objDate=" + F.getTime() + ", new Date(1900,0,31)=" + E.getTime();
    A += "offset=" + G;
    this.dayCyl = G + 40;
    this.monCyl = 14;
    for (D = 1900; D < 2050 && G > 0; D++) {
        B = lYearDays(D);
        G -= B;
        this.monCyl += 12
    }
    if (G < 0) {
        G += B;
        D--;
        this.monCyl -= 12
    }
    this.year = D;
    this.yearCyl = D - 1864;
    C = leapMonth(D);
    this.isLeap = false;
    for (D = 1; D < 13 && G > 0; D++) {
        if (C > 0 && D == (C + 1) && this.isLeap == false) {
            --D;
            this.isLeap = true;
            B = leapDays(this.year)
        } else {
            B = monthDays(this.year, D)
        }
        if (this.isLeap == true && D == (C + 1)) {
            this.isLeap = false
        }
        G -= B;
        if (this.isLeap == false) {
            this.monCyl++
        }
    }
    if (G == 0 && C > 0 && D == C + 1) {
        if (this.isLeap) {
            this.isLeap = false
        } else {
            this.isLeap = true;
            --D;
            --this.monCyl
        }
    }
    if (G < 0) {
        G += B;
        --D;
        --this.monCyl
    }
    this.month = D;
    this.day = G + 1;
    A += "\noffset=" + G + ", year=" + this.year + ", yearCyl=" + this.yearCyl + ", month=" + this.month + ",\n monthCyl=" + this.monthCyl + ", day=" + this.day + ", dayCyl=" + this.dayCyl;
}
function solarDays(B, A) {
    if (A == 1) {
        return (((B % 4 == 0) && (B % 100 != 0) || (B % 400 == 0)) ? 29 : 28)
    } else {
        return (solarMonth[A])
    }
}
function cyclical(A) {
    return (Gan[A % 10] + Zhi[A % 12])
}
function calElement(A, G, J, B, F, D, E, H, C, I, K) {
    this.isToday = false;
    this.sYear = A;
    this.sMonth = G;
    this.sDay = J;
    this.week = B;
    this.lYear = F;
    this.lMonth = D;
    this.lDay = E;
    this.isLeap = H;
    this.cYear = C;
    this.cMonth = I;
    this.cDay = K;
    this.color = "";
    this.lunarFestival = "";
    this.solarFestival = "";
    this.solarTerms = ""
}
function sTerm(C, B) {
    var A = new Date((31556925974.7 * (C - 1900) + sTermInfo[B] * 60000) - 2208549300000);
    return (A.getUTCDate())
}
function calendar(N, F,tY,tM,tD) {
    var O, I, L, B, K = 1, C, M = 0, H, G;
    var D = new Array(3);
    var E = 0;
    var A = 0;
    O = new Date(N, F, 1);
    this.length = solarDays(N, F);
    this.firstWeek = O.getDay();
    for (var J = 0; J < this.length; J++) {
        if (K > M) {
            O = new Date(N, F, J + 1);
            I = new Lunar(O);
            L = I.year;
            B = I.month;
            K = I.day;
            C = I.isLeap;
            M = C ? leapDays(L) : monthDays(L, B);
            if (E == 0) {
                A = B
            }
            D[E++] = J - K + 1
        }
        this[J] = new calElement(N, F + 1, J + 1, nStr1[(J + this.firstWeek) % 7], L, B, K++, C, cyclical(I.yearCyl), cyclical(I.monCyl), cyclical(I.dayCyl++));
        if ((J + this.firstWeek) % 7 == 0) {
            this[J].color = "#ff5f07"
        }
        if ((J + this.firstWeek) % 14 == 13) {
            this[J].color = "#ff5f07"
        }
    }
    H = sTerm(N, F * 2) - 1;
    G = sTerm(N, F * 2 + 1) - 1;
    this[H].solarTerms = solarTerm[F * 2];
    this[G].solarTerms = solarTerm[F * 2 + 1];
    if (F == 3) {
        this[H].color = "#ff5f07"
    }
    for (J in sFtv) {
        if (sFtv[J].match(/^(\d{2})(\d{2})([\s\*])(.+)$/)) {
            if (Number(RegExp.$1) == (F + 1)) {
                this[Number(RegExp.$2) - 1].solarFestival += RegExp.$4 + " ";
                if (RegExp.$3 == "*") {
                    this[Number(RegExp.$2) - 1].color = "#ff5f07"
                }
            }
        }
    }
    for (J in wFtv) {
        if (wFtv[J].match(/^(\d{2})(\d)(\d)([\s\*])(.+)$/)) {
            if (Number(RegExp.$1) == (F + 1)) {
                H = Number(RegExp.$2);
                G = Number(RegExp.$3);
                this[((this.firstWeek > G) ? 7 : 0) + 7 * (H - 1) + G - this.firstWeek] && (this[((this.firstWeek > G) ? 7 : 0) + 7 * (H - 1) + G - this.firstWeek].solarFestival += RegExp.$5 + " ")
            }
        }
    }
    for (J in lFtv) {
        if (lFtv[J].match(/^(\d{2})(.{2})([\s\*])(.+)$/)) {
            H = Number(RegExp.$1) - A;
            if (H == -11) {
                H = 1
            }
            if (H >= 0 && H < E) {
                G = D[H] + Number(RegExp.$2) - 1;
                if (G >= 0 && G < this.length) {
                    this[G].lunarFestival += RegExp.$4 + " ";
                    if (RegExp.$3 == "*") {
                        this[G].color = "#ff5f07"
                    }
                }
            }
        }
    }
    if ((this.firstWeek + 12) % 7 == 5) {
        this[12].solarFestival += "\u9ed1\u8272\u661f\u671f\u4e94 "
    }
    if (N == tY && F == tM) {
        this[tD - 1].isToday = true
    }
}
function cDay(B) {
    var A;
    switch (B) {
        case 10:
            A = "\u521d\u5341";
            break;
        case 20:
            A = "\u4e8c\u5341";
            break;
        case 30:
            A = "\u4e09\u5341";
            break;
        default:
            A = nStr2[Math.floor(B / 10)];
            A += nStr1[B % 10]
    }
    return (A)
}


module.exports = {
  Calendar: calendar,
  monthDays: monthDays,
  cDay: cDay
};
