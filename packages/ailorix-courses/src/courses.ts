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

const s = (chinese: string, english: string): AilorixStatement => ({
  chinese,
  english,
  soundmark: "",
});

export const ailorixCoursePack = {
  order: 0,
  title: "Ailorix 外企测试工程师英语全套",
  description:
    "面向软件测试工程师进外企：覆盖 QA 日常、测试设计、缺陷沟通、自动化、发布和面试表达。",
  creatorId: "ailorix",
  shareLevel: "public",
  isFree: true,
  cover: "/ailorix-work-course.svg",
} as const;

export const ailorixCourses: AilorixCourse[] = [
  {
    title: "测试工程师自我介绍",
    description: "介绍测试背景、职责、技术栈和职业目标。",
    statements: [
      s("我刚加入这个团队。", "I just joined the team."),
      s("我是一名软件测试工程师。", "I am a software test engineer."),
      s(
        "我主要负责功能测试和回归测试。",
        "I mainly focus on functional testing and regression testing.",
      ),
      s("我也在提升自己的自动化测试能力。", "I am also improving my test automation skills."),
      s("我的目标是进入外企工作。", "My goal is to work for an international company."),
      s("我还在熟悉团队的工作方式。", "I am still getting familiar with how the team works."),
    ],
  },
  {
    title: "入职与熟悉项目",
    description: "快速了解项目、文档、流程和关键联系人。",
    statements: [
      s(
        "我想先了解项目的整体结构。",
        "I would like to understand the overall structure of the project first.",
      ),
      s("这个文档是最新的吗？", "Is this document up to date?"),
      s("我应该从哪个任务开始？", "Which task should I start with?"),
      s("我需要先配置本地环境。", "I need to set up the local environment first."),
      s("这个流程目前是谁负责？", "Who is responsible for this process right now?"),
      s("我会把问题整理出来再同步。", "I will collect my questions and share them later."),
    ],
  },
  {
    title: "站会更新",
    description: "汇报昨天、今天、阻塞点和下一步。",
    statements: [
      s("昨天我完成了登录流程的检查。", "Yesterday I finished checking the login flow."),
      s("今天我会继续处理练习页面。", "Today I will continue working on the practice page."),
      s("我现在有一个小阻塞。", "I have a small blocker right now."),
      s("我需要确认接口返回的数据结构。", "I need to confirm the response structure from the API."),
      s("这个任务预计今天下午完成。", "This task should be done this afternoon."),
      s("目前没有其他风险。", "There are no other risks at the moment."),
    ],
  },
  {
    title: "任务确认与优先级",
    description: "确认范围、优先级、验收标准和交付时间。",
    statements: [
      s("我想确认一下这个任务的范围。", "I want to confirm the scope of this task."),
      s("这个需求的优先级高吗？", "Is this requirement high priority?"),
      s("我们先做最小可用版本可以吗？", "Can we build the minimum usable version first?"),
      s("这个任务的验收标准是什么？", "What are the acceptance criteria for this task?"),
      s(
        "如果时间不够，我们可以先砍掉这部分。",
        "If we do not have enough time, we can cut this part first.",
      ),
      s("我会先处理影响最大的部分。", "I will handle the part with the biggest impact first."),
    ],
  },
  {
    title: "请求帮助与澄清",
    description: "说明上下文、已经尝试过什么、需要别人帮什么。",
    statements: [
      s("我卡在这个错误上了。", "I am stuck on this error."),
      s("我已经检查了日志。", "I have already checked the logs."),
      s("我认为问题可能在配置里。", "I think the issue may be in the configuration."),
      s("你方便帮我看一下吗？", "Could you take a look when you have time?"),
      s("我想确认我的理解是否正确。", "I want to confirm whether my understanding is correct."),
      s("谢谢，我明白下一步了。", "Thanks, I understand the next step now."),
    ],
  },
  {
    title: "会议表达",
    description: "在会议里提出观点、同意、保留意见和追问。",
    statements: [
      s("我同意这个方向。", "I agree with this direction."),
      s("我有一个小问题。", "I have one quick question."),
      s("我想补充一点。", "I would like to add one point."),
      s(
        "我不太确定这个方案能否覆盖所有场景。",
        "I am not sure this approach covers all scenarios.",
      ),
      s("我们可以先看一下数据吗？", "Can we look at the data first?"),
      s("这个决定会影响上线时间。", "This decision will affect the release timeline."),
    ],
  },
  {
    title: "会后跟进",
    description: "整理结论、行动项、负责人和截止时间。",
    statements: [
      s("我来负责整理会议记录。", "I will take care of the meeting notes."),
      s("会后我会发行动项。", "I will send the action items after the meeting."),
      s("我们需要明确每个任务的负责人。", "We need to clarify the owner for each task."),
      s("这个行动项的截止时间是周五。", "The deadline for this action item is Friday."),
      s("我会跟进这个问题。", "I will follow up on this issue."),
      s("我们可以明天再确认一次。", "We can confirm it again tomorrow."),
    ],
  },
  {
    title: "邮件开头与结尾",
    description: "写自然、礼貌、不啰嗦的工作邮件。",
    statements: [
      s("希望你一切顺利。", "I hope you are doing well."),
      s("我写这封邮件是想同步一下最新进展。", "I am writing to share the latest progress."),
      s("感谢你之前的反馈。", "Thank you for your previous feedback."),
      s("请看下面的更新。", "Please see the update below."),
      s("如果你有任何问题，请告诉我。", "Please let me know if you have any questions."),
      s("期待你的回复。", "I look forward to hearing from you."),
    ],
  },
  {
    title: "邮件请求与催办",
    description: "请求信息、提醒对方、推动事情继续往前走。",
    statements: [
      s("你能帮我确认一下这个信息吗？", "Could you help me confirm this information?"),
      s("方便的话，请在今天下班前回复。", "If possible, please reply by the end of today."),
      s("我想温和提醒一下这个事项。", "I just wanted to gently follow up on this item."),
      s("我们需要你的确认才能继续。", "We need your confirmation before we can move forward."),
      s("如果你现在没空，明天回复也可以。", "If you are not available now, tomorrow also works."),
      s("谢谢你抽时间处理。", "Thank you for taking the time to handle this."),
    ],
  },
  {
    title: "Slack 与即时沟通",
    description: "短消息里快速同步、提问、确认和结束对话。",
    statements: [
      s("我看一下，稍后回复你。", "Let me check and get back to you later."),
      s("这个我可以处理。", "I can take care of this."),
      s("我刚更新了文档。", "I just updated the document."),
      s("你现在方便同步五分钟吗？", "Do you have five minutes for a quick sync now?"),
      s("我把链接发在这里。", "I will drop the link here."),
      s("收到，我会继续跟进。", "Got it, I will keep following up."),
    ],
  },
  {
    title: "进度与风险汇报",
    description: "清楚说明完成度、风险、影响和应对方案。",
    statements: [
      s("目前进度符合预期。", "The progress is on track so far."),
      s("这个任务比预期复杂。", "This task is more complex than expected."),
      s("主要风险是接口还没有稳定。", "The main risk is that the API is not stable yet."),
      s("这可能会影响明天的交付。", "This may affect tomorrow's delivery."),
      s("我建议先上线核心流程。", "I suggest we release the core flow first."),
      s("如果有变化，我会及时同步。", "If anything changes, I will share an update in time."),
    ],
  },
  {
    title: "问题与 Bug 描述",
    description: "描述现象、复现步骤、期望结果和实际结果。",
    statements: [
      s("我发现了一个问题。", "I found an issue."),
      s("这个问题可以稳定复现。", "This issue can be reproduced consistently."),
      s("复现步骤如下。", "Here are the steps to reproduce it."),
      s("期望结果是页面正常加载。", "The expected result is that the page loads normally."),
      s("实际结果是请求失败。", "The actual result is that the request fails."),
      s("我已经把日志贴在评论里。", "I have attached the logs in the comment."),
    ],
  },
  {
    title: "需求与产品讨论",
    description: "讨论用户价值、边界、方案和取舍。",
    statements: [
      s("这个功能解决的是哪个用户问题？", "Which user problem does this feature solve?"),
      s("我们需要先明确目标用户。", "We need to clarify the target users first."),
      s("这个场景是否足够高频？", "Is this scenario common enough?"),
      s(
        "我担心这个方案会让流程变复杂。",
        "I am worried this approach will make the flow more complex.",
      ),
      s("有没有更简单的实现方式？", "Is there a simpler way to implement this?"),
      s("我们可以先用数据验证这个假设。", "We can use data to validate this assumption first."),
    ],
  },
  {
    title: "数据与报告",
    description: "解释指标、趋势、异常和结论。",
    statements: [
      s("这个指标比上周提高了。", "This metric improved compared with last week."),
      s("转化率下降了三个点。", "The conversion rate dropped by three percentage points."),
      s("这个异常可能和流量来源有关。", "This anomaly may be related to the traffic source."),
      s("我们需要再看一周的数据。", "We need to look at one more week of data."),
      s("结论还不够明确。", "The conclusion is not clear enough yet."),
      s("我会把分析结果整理成报告。", "I will organize the analysis into a report."),
    ],
  },
  {
    title: "客户同步",
    description: "对外更新进度、说明风险、表达下一步安排。",
    statements: [
      s("我们已经完成了第一版。", "We have completed the first version."),
      s("目前功能可以正常使用。", "The feature is working as expected now."),
      s("我们还在处理一个边界情况。", "We are still handling one edge case."),
      s("这不会影响核心流程。", "This will not affect the core workflow."),
      s("我们预计今天晚些时候更新。", "We expect to share an update later today."),
      s("我们会把结果同步给你。", "We will share the result with you."),
    ],
  },
  {
    title: "客户反馈与道歉",
    description: "接住反馈、承认问题、说明修复和后续动作。",
    statements: [
      s("感谢你指出这个问题。", "Thank you for pointing this out."),
      s("很抱歉给你带来了不便。", "We are sorry for the inconvenience."),
      s("我们正在调查根本原因。", "We are investigating the root cause."),
      s("我们会优先处理这个问题。", "We will prioritize this issue."),
      s("修复完成后我会第一时间通知你。", "I will let you know as soon as the fix is ready."),
      s("感谢你的耐心。", "Thank you for your patience."),
    ],
  },
  {
    title: "一对一沟通",
    description: "和经理或同事聊状态、反馈、成长和困难。",
    statements: [
      s("我想聊一下最近的工作状态。", "I would like to talk about my recent work status."),
      s("我觉得这个方向对我有帮助。", "I think this direction is helpful for me."),
      s("我希望得到更多反馈。", "I would like to get more feedback."),
      s("这个任务让我学到了很多。", "I learned a lot from this task."),
      s("我想提升自己的沟通效率。", "I want to improve my communication efficiency."),
      s("接下来我会更主动同步风险。", "Next, I will be more proactive in sharing risks."),
    ],
  },
  {
    title: "跨团队协作",
    description: "和设计、研发、运营、销售等团队协同推进。",
    statements: [
      s("这个问题需要和设计团队确认。", "We need to confirm this with the design team."),
      s("我会联系后端同事看一下接口。", "I will contact the backend teammate to check the API."),
      s("我们需要对齐交付时间。", "We need to align on the delivery timeline."),
      s("这个依赖会影响我们的进度。", "This dependency will affect our progress."),
      s("我会在今天同步最新状态。", "I will share the latest status today."),
      s("谢谢你们配合推进。", "Thank you for helping move this forward."),
    ],
  },
  {
    title: "日程与约会",
    description: "安排会议、改期、取消、确认时间。",
    statements: [
      s("你明天下午方便吗？", "Are you available tomorrow afternoon?"),
      s("我们可以把会议提前吗？", "Can we move the meeting earlier?"),
      s("我今天有点冲突，需要改期。", "I have a conflict today and need to reschedule."),
      s("这个时间对我可以。", "This time works for me."),
      s("我会发一个日历邀请。", "I will send a calendar invite."),
      s("如果时间不合适，请直接改。", "If the time does not work, please feel free to change it."),
    ],
  },
  {
    title: "远程办公与状态",
    description: "说明远程、离开、回来、专注和可用状态。",
    statements: [
      s("我今天远程办公。", "I am working remotely today."),
      s("我十分钟后回来。", "I will be back in ten minutes."),
      s("我现在在处理一个紧急问题。", "I am working on an urgent issue right now."),
      s("我下午可以参加会议。", "I can join the meeting this afternoon."),
      s("我会晚一点回复消息。", "I will reply to messages a bit later."),
      s("如果很紧急，请直接打电话给我。", "If it is urgent, please call me directly."),
    ],
  },
  {
    title: "上线与发布",
    description: "上线前检查、发布状态、回滚和验证。",
    statements: [
      s("我们准备发布新版本。", "We are ready to release the new version."),
      s("上线前我会再检查一遍。", "I will check it again before the release."),
      s("发布后我们需要观察日志。", "After the release, we need to monitor the logs."),
      s("如果出现问题，我们可以回滚。", "If there is an issue, we can roll it back."),
      s("核心流程已经验证通过。", "The core flow has been verified."),
      s("我会在发布完成后同步结果。", "I will share the result after the release is done."),
    ],
  },
  {
    title: "复盘与总结",
    description: "总结结果、原因、经验和下一步改进。",
    statements: [
      s("这次结果基本符合预期。", "The result was mostly as expected."),
      s(
        "主要问题是前期范围不够清楚。",
        "The main problem was that the scope was not clear enough at the beginning.",
      ),
      s("我们下次需要更早同步风险。", "Next time, we need to share risks earlier."),
      s("这个经验可以沉淀到文档里。", "This lesson can be documented."),
      s("我会整理一份复盘总结。", "I will prepare a retrospective summary."),
      s("下一步我们可以优化流程。", "Next, we can improve the process."),
    ],
  },
  {
    title: "测试计划",
    description: "确认测试范围、测试策略、资源、风险和时间安排。",
    statements: [
      s("我会先准备测试计划。", "I will prepare the test plan first."),
      s("我们需要确认测试范围。", "We need to confirm the test scope."),
      s(
        "哪些场景不在本次测试范围内？",
        "Which scenarios are out of scope for this round of testing?",
      ),
      s("我会根据风险安排测试优先级。", "I will prioritize testing based on risk."),
      s("我们需要为回归测试预留时间。", "We need to reserve time for regression testing."),
      s(
        "如果需求有变化，测试计划也需要更新。",
        "If the requirements change, the test plan needs to be updated as well.",
      ),
    ],
  },
  {
    title: "测试用例设计",
    description: "描述测试用例、边界值、等价类和验收标准。",
    statements: [
      s(
        "我会根据需求文档设计测试用例。",
        "I will design test cases based on the requirement document.",
      ),
      s("这个场景需要覆盖边界值。", "This scenario needs to cover boundary values."),
      s("我会补充异常路径的用例。", "I will add test cases for the negative paths."),
      s("这个用例验证的是核心流程。", "This test case validates the core flow."),
      s("我们需要确认预期结果。", "We need to confirm the expected result."),
      s(
        "我会把测试用例同步到测试管理平台。",
        "I will upload the test cases to the test management platform.",
      ),
    ],
  },
  {
    title: "Bug 报告",
    description: "准确说明缺陷标题、环境、复现步骤、实际结果和期望结果。",
    statements: [
      s("我会提交一个缺陷报告。", "I will file a bug report."),
      s("这个问题只在测试环境出现。", "This issue only occurs in the test environment."),
      s("复现步骤已经写在描述里。", "The steps to reproduce are included in the description."),
      s("实际结果和期望结果不一致。", "The actual result is different from the expected result."),
      s("我已经附上了截图和日志。", "I have attached the screenshots and logs."),
      s("这个缺陷的严重程度是高。", "The severity of this bug is high."),
    ],
  },
  {
    title: "缺陷沟通与复测",
    description: "和开发确认问题、推动修复、验证修复结果。",
    statements: [
      s("这个缺陷已经分配给开发同事了。", "This bug has been assigned to a developer."),
      s("开发说这是一个已知问题。", "The developer said this is a known issue."),
      s("我需要确认修复版本。", "I need to confirm the fixed version."),
      s("修复后我会重新测试。", "I will retest it after the fix."),
      s("这个问题已经验证通过。", "This issue has been verified."),
      s("我会关闭这个缺陷。", "I will close this bug."),
    ],
  },
  {
    title: "回归测试",
    description: "说明回归范围、重点模块、风险区域和测试结果。",
    statements: [
      s("我们需要跑一轮回归测试。", "We need to run a round of regression testing."),
      s("这次回归重点关注支付流程。", "This regression focuses on the payment flow."),
      s("我会先覆盖高风险模块。", "I will cover the high-risk modules first."),
      s("目前没有发现阻塞问题。", "No blocking issues have been found so far."),
      s(
        "还有两个低优先级问题没有修复。",
        "There are still two low-priority issues that have not been fixed.",
      ),
      s(
        "从测试角度看，可以继续发布。",
        "From a testing perspective, we can proceed with the release.",
      ),
    ],
  },
  {
    title: "自动化测试",
    description: "表达自动化覆盖、脚本维护、失败分析和稳定性问题。",
    statements: [
      s("我正在维护自动化测试脚本。", "I am maintaining the automated test scripts."),
      s("这个场景适合做自动化覆盖。", "This scenario is suitable for automation coverage."),
      s("这个用例最近有点不稳定。", "This test case has been flaky recently."),
      s("失败原因可能是等待时间不够。", "The failure may be caused by insufficient waiting time."),
      s("我会优化定位器和断言。", "I will improve the locators and assertions."),
      s("自动化结果会同步到报告里。", "The automation results will be included in the report."),
    ],
  },
  {
    title: "API 测试",
    description: "检查请求、响应、状态码、鉴权和错误处理。",
    statements: [
      s("我会先检查接口文档。", "I will check the API documentation first."),
      s("这个接口返回了错误的状态码。", "This API returned the wrong status code."),
      s("响应体里缺少一个字段。", "A field is missing in the response body."),
      s("这个接口需要鉴权。", "This API requires authentication."),
      s("我会补充异常参数的测试。", "I will add tests for invalid parameters."),
      s(
        "我们需要确认错误信息是否符合预期。",
        "We need to confirm whether the error message is expected.",
      ),
    ],
  },
  {
    title: "CI 与测试报告",
    description: "说明流水线失败、测试报告、失败用例和下一步处理。",
    statements: [
      s("流水线在测试阶段失败了。", "The pipeline failed during the testing stage."),
      s("我正在查看失败的用例。", "I am checking the failed test cases."),
      s("这次失败和代码变更有关。", "This failure is related to the code change."),
      s("测试报告已经生成。", "The test report has been generated."),
      s("我会把失败原因同步给团队。", "I will share the failure reason with the team."),
      s("修复后我们需要重新触发流水线。", "After the fix, we need to rerun the pipeline."),
    ],
  },
  {
    title: "外企 QA 面试",
    description: "练习外企测试工程师面试里的经历、方法和项目表达。",
    statements: [
      s("我有三年软件测试经验。", "I have three years of experience in software testing."),
      s("我熟悉测试用例设计和缺陷管理。", "I am familiar with test case design and bug tracking."),
      s("我使用过 Playwright 做 UI 自动化。", "I have used Playwright for UI automation."),
      s("我会根据风险选择测试重点。", "I choose testing priorities based on risk."),
      s(
        "我喜欢和开发、产品一起澄清问题。",
        "I like working with developers and product managers to clarify issues.",
      ),
      s("我正在提升英语沟通能力。", "I am improving my English communication skills."),
    ],
  },
  {
    title: "跨文化与外企沟通",
    description: "练习更直接、礼貌、清晰的国际团队表达方式。",
    statements: [
      s("我想确认一下我们的共识。", "I would like to confirm our shared understanding."),
      s("我可能需要更多上下文。", "I may need more context."),
      s("我理解你的担心。", "I understand your concern."),
      s(
        "从测试角度看，我建议先降低风险。",
        "From a QA perspective, I suggest reducing the risk first.",
      ),
      s("如果我表达得不够清楚，请告诉我。", "Please let me know if I am not being clear."),
      s("谢谢你的耐心解释。", "Thank you for explaining it patiently."),
    ],
  },
];
