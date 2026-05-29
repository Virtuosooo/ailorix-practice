export type AilorixStatement = {
  chinese: string;
  english: string;
  soundmark: string;
};

export type AilorixCourse = {
  title: string;
  description: string;
  statements: AilorixStatement[];
};

export const ailorixCoursePack = {
  order: 0,
  title: "Ailorix 职场英语第一周",
  description: "面向入职第一周、会议、协作和客户沟通的高频句子练习。",
  creatorId: "ailorix",
  shareLevel: "public",
  isFree: true,
  cover: "/ailorix-work-course.svg",
} as const;

export const ailorixCourses: AilorixCourse[] = [
  {
    title: "第一天自我介绍",
    description: "用自然、简短的句子介绍自己、岗位和入职状态。",
    statements: [
      {
        chinese: "我刚加入这个团队。",
        english: "I just joined the team.",
        soundmark: "/aɪ/ /dʒʌst/ /dʒɔɪnd/ /ðə/ /tim/",
      },
      {
        chinese: "我这个星期会熟悉产品。",
        english: "I will get familiar with the product this week.",
        soundmark: "/aɪ/ /wɪl/ /ɡɛt/ /fəˈmɪljər/ /wɪð/ /ðə/ /ˈprɑdʌkt/",
      },
      {
        chinese: "我负责英语学习体验。",
        english: "I am responsible for the English learning experience.",
        soundmark: "/aɪ/ /æm/ /rɪˈspɑnsəbəl/ /fɔr/ /ði/ /ˈɪŋɡlɪʃ/ /ˈlɝnɪŋ/",
      },
      {
        chinese: "我想先了解当前流程。",
        english: "I would like to understand the current workflow first.",
        soundmark: "/aɪ/ /wʊd/ /laɪk/ /tə/ /ˌʌndərˈstænd/ /ðə/ /ˈkɝənt/ /ˈwɝkfloʊ/",
      },
      {
        chinese: "如果方便的话，我想约十五分钟同步一下。",
        english: "If it works for you, I would like to sync for fifteen minutes.",
        soundmark: "/ɪf/ /ɪt/ /wɝks/ /fɔr/ /ju/ /aɪ/ /wʊd/ /laɪk/ /tə/ /sɪŋk/",
      },
      {
        chinese: "我会把问题整理在文档里。",
        english: "I will collect my questions in a document.",
        soundmark: "/aɪ/ /wɪl/ /kəˈlɛkt/ /maɪ/ /ˈkwɛstʃənz/ /ɪn/ /ə/ /ˈdɑkjumənt/",
      },
      {
        chinese: "谢谢你带我熟悉项目。",
        english: "Thank you for helping me get familiar with the project.",
        soundmark: "/θæŋk/ /ju/ /fɔr/ /ˈhɛlpɪŋ/ /mi/ /ɡɛt/ /fəˈmɪljər/",
      },
      {
        chinese: "我会先从最重要的任务开始。",
        english: "I will start with the most important task.",
        soundmark: "/aɪ/ /wɪl/ /stɑrt/ /wɪð/ /ðə/ /moʊst/ /ɪmˈpɔrtənt/ /tæsk/",
      },
    ],
  },
  {
    title: "站会更新",
    description: "汇报昨天、今天和阻塞点，保持表达清楚有边界。",
    statements: [
      {
        chinese: "昨天我完成了登录流程的检查。",
        english: "Yesterday I finished checking the login flow.",
        soundmark: "/ˈjɛstərdeɪ/ /aɪ/ /ˈfɪnɪʃt/ /ˈtʃɛkɪŋ/ /ðə/ /ˈlɔɡɪn/ /floʊ/",
      },
      {
        chinese: "今天我会继续处理练习页面。",
        english: "Today I will continue working on the practice page.",
        soundmark: "/təˈdeɪ/ /aɪ/ /wɪl/ /kənˈtɪnju/ /ˈwɝkɪŋ/ /ɑn/ /ðə/ /ˈpræktɪs/ /peɪdʒ/",
      },
      {
        chinese: "我现在有一个小阻塞。",
        english: "I have a small blocker right now.",
        soundmark: "/aɪ/ /hæv/ /ə/ /smɔl/ /ˈblɑkər/ /raɪt/ /naʊ/",
      },
      {
        chinese: "我需要确认接口返回的数据结构。",
        english: "I need to confirm the response structure from the API.",
        soundmark: "/aɪ/ /nid/ /tə/ /kənˈfɝm/ /ðə/ /rɪˈspɑns/ /ˈstrʌktʃər/",
      },
      {
        chinese: "这个任务预计今天下午完成。",
        english: "This task should be done this afternoon.",
        soundmark: "/ðɪs/ /tæsk/ /ʃʊd/ /bi/ /dʌn/ /ðɪs/ /ˌæftərˈnun/",
      },
      {
        chinese: "如果范围变大，我会及时同步。",
        english: "If the scope gets bigger, I will share an update in time.",
        soundmark: "/ɪf/ /ðə/ /skoʊp/ /ɡɛts/ /ˈbɪɡər/ /aɪ/ /wɪl/ /ʃɛr/ /ən/ /ˈʌpdeɪt/",
      },
      {
        chinese: "目前没有其他风险。",
        english: "There are no other risks at the moment.",
        soundmark: "/ðɛr/ /ɑr/ /noʊ/ /ˈʌðər/ /rɪsks/ /æt/ /ðə/ /ˈmoʊmənt/",
      },
      {
        chinese: "我会在群里发最新进展。",
        english: "I will post the latest progress in the channel.",
        soundmark: "/aɪ/ /wɪl/ /poʊst/ /ðə/ /ˈleɪtəst/ /ˈprɑɡrɛs/ /ɪn/ /ðə/ /ˈtʃænəl/",
      },
    ],
  },
  {
    title: "请求帮助",
    description: "在不显得慌乱的情况下说明上下文、尝试和具体请求。",
    statements: [
      {
        chinese: "我卡在这个错误上了。",
        english: "I am stuck on this error.",
        soundmark: "/aɪ/ /æm/ /stʌk/ /ɑn/ /ðɪs/ /ˈɛrər/",
      },
      {
        chinese: "我已经检查了日志。",
        english: "I have already checked the logs.",
        soundmark: "/aɪ/ /hæv/ /ɔlˈrɛdi/ /tʃɛkt/ /ðə/ /lɔɡz/",
      },
      {
        chinese: "我认为问题可能在配置里。",
        english: "I think the issue may be in the configuration.",
        soundmark: "/aɪ/ /θɪŋk/ /ði/ /ˈɪʃu/ /meɪ/ /bi/ /ɪn/ /ðə/ /kənˌfɪɡjəˈreɪʃən/",
      },
      {
        chinese: "你方便帮我看一下吗？",
        english: "Could you take a look when you have time?",
        soundmark: "/kʊd/ /ju/ /teɪk/ /ə/ /lʊk/ /wɛn/ /ju/ /hæv/ /taɪm/",
      },
      {
        chinese: "我先把复现步骤发给你。",
        english: "I will send you the steps to reproduce it first.",
        soundmark: "/aɪ/ /wɪl/ /sɛnd/ /ju/ /ðə/ /stɛps/ /tə/ /ˌriprəˈdus/ /ɪt/",
      },
      {
        chinese: "我想确认我的理解是否正确。",
        english: "I want to confirm whether my understanding is correct.",
        soundmark: "/aɪ/ /wɑnt/ /tə/ /kənˈfɝm/ /ˈwɛðər/ /maɪ/ /ˌʌndərˈstændɪŋ/ /ɪz/ /kəˈrɛkt/",
      },
      {
        chinese: "如果你有建议，我可以马上调整。",
        english: "If you have suggestions, I can adjust it right away.",
        soundmark: "/ɪf/ /ju/ /hæv/ /səɡˈdʒɛstʃənz/ /aɪ/ /kæn/ /əˈdʒʌst/ /ɪt/ /raɪt/ /əˈweɪ/",
      },
      {
        chinese: "谢谢，我明白下一步了。",
        english: "Thanks, I understand the next step now.",
        soundmark: "/θæŋks/ /aɪ/ /ˌʌndərˈstænd/ /ðə/ /nɛkst/ /stɛp/ /naʊ/",
      },
    ],
  },
  {
    title: "会议与跟进",
    description: "表达观点、确认决策、记录行动项和会后跟进。",
    statements: [
      {
        chinese: "我同意这个方向。",
        english: "I agree with this direction.",
        soundmark: "/aɪ/ /əˈɡri/ /wɪð/ /ðɪs/ /dəˈrɛkʃən/",
      },
      {
        chinese: "我有一个小问题。",
        english: "I have one quick question.",
        soundmark: "/aɪ/ /hæv/ /wʌn/ /kwɪk/ /ˈkwɛstʃən/",
      },
      {
        chinese: "我们需要先确认优先级。",
        english: "We need to confirm the priority first.",
        soundmark: "/wi/ /nid/ /tə/ /kənˈfɝm/ /ðə/ /praɪˈɔrəti/ /fɝst/",
      },
      {
        chinese: "这个决定会影响上线时间。",
        english: "This decision will affect the release timeline.",
        soundmark: "/ðɪs/ /dɪˈsɪʒən/ /wɪl/ /əˈfɛkt/ /ðə/ /rɪˈlis/ /ˈtaɪmlaɪn/",
      },
      {
        chinese: "我来负责整理会议记录。",
        english: "I will take care of the meeting notes.",
        soundmark: "/aɪ/ /wɪl/ /teɪk/ /kɛr/ /ʌv/ /ðə/ /ˈmitɪŋ/ /noʊts/",
      },
      {
        chinese: "会后我会发行动项。",
        english: "I will send the action items after the meeting.",
        soundmark: "/aɪ/ /wɪl/ /sɛnd/ /ði/ /ˈækʃən/ /ˈaɪtəmz/ /ˈæftər/ /ðə/ /ˈmitɪŋ/",
      },
      {
        chinese: "我们可以明天再确认一次。",
        english: "We can confirm it again tomorrow.",
        soundmark: "/wi/ /kæn/ /kənˈfɝm/ /ɪt/ /əˈɡɛn/ /təˈmɑroʊ/",
      },
      {
        chinese: "我会跟进这个问题。",
        english: "I will follow up on this issue.",
        soundmark: "/aɪ/ /wɪl/ /ˈfɑloʊ/ /ʌp/ /ɑn/ /ðɪs/ /ˈɪʃu/",
      },
    ],
  },
  {
    title: "客户同步",
    description: "对外更新进度、说明风险、表达下一步安排。",
    statements: [
      {
        chinese: "我们已经完成了第一版。",
        english: "We have completed the first version.",
        soundmark: "/wi/ /hæv/ /kəmˈplitəd/ /ðə/ /fɝst/ /ˈvɝʒən/",
      },
      {
        chinese: "目前功能可以正常使用。",
        english: "The feature is working as expected now.",
        soundmark: "/ðə/ /ˈfitʃər/ /ɪz/ /ˈwɝkɪŋ/ /æz/ /ɪkˈspɛktəd/ /naʊ/",
      },
      {
        chinese: "我们还在处理一个边界情况。",
        english: "We are still handling one edge case.",
        soundmark: "/wi/ /ɑr/ /stɪl/ /ˈhændlɪŋ/ /wʌn/ /ɛdʒ/ /keɪs/",
      },
      {
        chinese: "这不会影响核心流程。",
        english: "This will not affect the core workflow.",
        soundmark: "/ðɪs/ /wɪl/ /nɑt/ /əˈfɛkt/ /ðə/ /kɔr/ /ˈwɝkfloʊ/",
      },
      {
        chinese: "我们预计今天晚些时候更新。",
        english: "We expect to share an update later today.",
        soundmark: "/wi/ /ɪkˈspɛkt/ /tə/ /ʃɛr/ /ən/ /ˈʌpdeɪt/ /ˈleɪtər/ /təˈdeɪ/",
      },
      {
        chinese: "如果你同意，我们会按这个方案继续。",
        english: "If you agree, we will continue with this approach.",
        soundmark: "/ɪf/ /ju/ /əˈɡri/ /wi/ /wɪl/ /kənˈtɪnju/ /wɪð/ /ðɪs/ /əˈproʊtʃ/",
      },
      {
        chinese: "感谢你的反馈。",
        english: "Thank you for your feedback.",
        soundmark: "/θæŋk/ /ju/ /fɔr/ /jʊr/ /ˈfidbæk/",
      },
      {
        chinese: "我们会把结果同步给你。",
        english: "We will share the result with you.",
        soundmark: "/wi/ /wɪl/ /ʃɛr/ /ðə/ /rɪˈzʌlt/ /wɪð/ /ju/",
      },
    ],
  },
];
