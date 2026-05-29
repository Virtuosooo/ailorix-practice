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
  {
    title: "QA 高频词汇",
    description: "掌握测试工作里最常用的基础表达。",
    statements: [
      s("这个用例已经通过。", "This test case has passed."),
      s("这个用例失败了。", "This test case has failed."),
      s("这是一个阻塞问题。", "This is a blocking issue."),
      s("这个问题需要进一步调查。", "This issue needs further investigation."),
      s("测试结果符合预期。", "The test result matches the expectation."),
      s("我会更新测试状态。", "I will update the test status."),
    ],
  },
  {
    title: "QA 站会表达",
    description: "用测试工程师视角汇报日常进展。",
    statements: [
      s("昨天我完成了冒烟测试。", "Yesterday I completed the smoke testing."),
      s("今天我会继续做回归测试。", "Today I will continue with regression testing."),
      s("我发现了两个中等优先级缺陷。", "I found two medium-priority bugs."),
      s(
        "其中一个问题还在等待开发确认。",
        "One of them is still waiting for developer confirmation.",
      ),
      s("测试环境目前不太稳定。", "The test environment is not very stable at the moment."),
      s("我会在测试完成后同步报告。", "I will share the report after testing is completed."),
    ],
  },
  {
    title: "需求评审",
    description: "在需求评审中发现缺口、风险和歧义。",
    statements: [
      s("这个需求里有一个不清楚的地方。", "There is one unclear point in this requirement."),
      s("这个场景是否需要支持异常输入？", "Does this scenario need to support invalid input?"),
      s("这里的默认行为是什么？", "What is the default behavior here?"),
      s("这个规则和之前的逻辑有冲突。", "This rule conflicts with the previous logic."),
      s("我建议补充一个验收标准。", "I suggest adding one acceptance criterion."),
      s("确认清楚后我会更新测试用例。", "After it is confirmed, I will update the test cases."),
    ],
  },
  {
    title: "验收标准",
    description: "确认什么叫做完成、通过和可发布。",
    statements: [
      s("我们需要明确通过标准。", "We need to clarify the pass criteria."),
      s(
        "这个功能完成后应该支持哪些场景？",
        "Which scenarios should this feature support when it is done?",
      ),
      s("失败提示需要展示给用户。", "The error message should be shown to the user."),
      s("这个字段不能为空。", "This field cannot be empty."),
      s("保存成功后页面应该跳转。", "After saving successfully, the page should redirect."),
      s("这些标准会影响测试范围。", "These criteria will affect the test scope."),
    ],
  },
  {
    title: "基于风险的测试",
    description: "解释测试优先级、风险等级和取舍。",
    statements: [
      s("我会优先测试高风险区域。", "I will test the high-risk areas first."),
      s("支付流程对业务影响最大。", "The payment flow has the biggest business impact."),
      s("这个模块最近改动比较多。", "This module has changed a lot recently."),
      s("我们应该增加这里的覆盖率。", "We should increase the coverage here."),
      s("低风险场景可以稍后验证。", "Low-risk scenarios can be verified later."),
      s("这个取舍可以降低发布风险。", "This trade-off can reduce the release risk."),
    ],
  },
  {
    title: "探索式测试",
    description: "表达自由探索、观察异常和补充发现。",
    statements: [
      s("我会做一轮探索式测试。", "I will do a round of exploratory testing."),
      s("我想看看用户是否会走这条路径。", "I want to see whether users may take this path."),
      s("这里的交互有点不自然。", "The interaction here feels a bit unnatural."),
      s("我发现了一个边界场景。", "I found an edge scenario."),
      s("这个问题不在原来的测试用例里。", "This issue was not covered by the original test cases."),
      s("我会把新发现补充到用例里。", "I will add the new findings to the test cases."),
    ],
  },
  {
    title: "冒烟测试",
    description: "快速判断版本是否可以继续深入测试。",
    statements: [
      s("我先跑一轮冒烟测试。", "I will run a round of smoke testing first."),
      s("核心流程目前可以打开。", "The core flow can be opened for now."),
      s("登录功能通过了冒烟测试。", "The login feature passed the smoke test."),
      s("有一个阻塞问题导致无法继续测试。", "A blocking issue prevents further testing."),
      s("这个构建不适合进入回归阶段。", "This build is not ready for regression testing."),
      s(
        "冒烟测试通过后我会继续详细测试。",
        "After the smoke test passes, I will continue with detailed testing.",
      ),
    ],
  },
  {
    title: "快速验证",
    description: "针对小改动做 sanity check 和定向验证。",
    statements: [
      s("我会做一个快速验证。", "I will do a quick sanity check."),
      s("这次只改了一个配置项。", "Only one configuration item was changed this time."),
      s("我会重点验证受影响的页面。", "I will focus on the affected page."),
      s("目前看起来没有明显回归。", "There is no obvious regression so far."),
      s("这个改动不需要完整回归。", "This change does not require full regression."),
      s("我会把验证结果写在评论里。", "I will write the verification result in the comment."),
    ],
  },
  {
    title: "回归策略",
    description: "设计回归范围、顺序和重点。",
    statements: [
      s("我们需要定义回归范围。", "We need to define the regression scope."),
      s("我建议先覆盖核心业务流程。", "I suggest covering the core business flows first."),
      s("最近修改过的模块需要重点测试。", "Recently changed modules need focused testing."),
      s("历史高发问题也应该回归。", "Previously frequent issues should also be regressed."),
      s("完整回归大概需要一天。", "Full regression will take about one day."),
      s("我会按风险顺序执行。", "I will execute it in risk order."),
    ],
  },
  {
    title: "兼容性测试",
    description: "覆盖浏览器、设备、系统和分辨率差异。",
    statements: [
      s("这个问题只在 Chrome 上出现。", "This issue only happens on Chrome."),
      s("我们也需要验证 Safari。", "We also need to verify Safari."),
      s("移动端布局有一点错位。", "The mobile layout is slightly misaligned."),
      s("这个分辨率下按钮被遮挡了。", "The button is blocked at this resolution."),
      s("我会补充一个兼容性测试记录。", "I will add a compatibility testing record."),
      s("这个问题对桌面端没有影响。", "This issue does not affect the desktop version."),
    ],
  },
  {
    title: "移动端测试",
    description: "验证移动端布局、输入、滚动和弱网行为。",
    statements: [
      s("我会在移动端再测一遍。", "I will test it again on mobile."),
      s("输入框在小屏幕上太窄了。", "The input field is too narrow on small screens."),
      s("页面滚动不太顺畅。", "The page scrolling is not very smooth."),
      s("弱网下加载时间比较长。", "The loading time is long on a poor network."),
      s("键盘弹出后遮住了按钮。", "The keyboard covers the button after it opens."),
      s(
        "这个问题需要设计和前端一起看。",
        "Design and frontend need to look at this issue together.",
      ),
    ],
  },
  {
    title: "Web 测试",
    description: "验证页面、表单、导航、权限和错误状态。",
    statements: [
      s("我会检查页面导航是否正常。", "I will check whether the page navigation works correctly."),
      s("这个表单需要校验必填项。", "This form needs to validate required fields."),
      s("未登录用户不应该看到这个页面。", "Unauthenticated users should not see this page."),
      s("错误状态需要给出清楚提示。", "The error state needs a clear message."),
      s("刷新后数据应该保留。", "The data should remain after refreshing the page."),
      s("我会验证浏览器返回按钮。", "I will verify the browser back button."),
    ],
  },
  {
    title: "性能测试基础",
    description: "表达加载时间、响应时间、瓶颈和观察结果。",
    statements: [
      s("这个页面加载有点慢。", "This page loads a bit slowly."),
      s("接口响应时间超过了预期。", "The API response time is longer than expected."),
      s("我们需要确认性能基准。", "We need to confirm the performance baseline."),
      s("高并发下可能会出现瓶颈。", "There may be a bottleneck under high concurrency."),
      s("我会记录关键性能指标。", "I will record the key performance metrics."),
      s("这个问题需要进一步压测。", "This issue needs further load testing."),
    ],
  },
  {
    title: "安全测试基础",
    description: "覆盖权限、输入校验、敏感信息和常见安全风险。",
    statements: [
      s("这个接口需要权限校验。", "This API needs permission validation."),
      s("普通用户不应该访问这个数据。", "Regular users should not access this data."),
      s("输入内容需要做安全过滤。", "The input needs security filtering."),
      s(
        "错误信息不应该暴露敏感信息。",
        "The error message should not expose sensitive information.",
      ),
      s("我会检查越权访问场景。", "I will check unauthorized access scenarios."),
      s("这个问题可能有安全风险。", "This issue may have a security risk."),
    ],
  },
  {
    title: "数据库校验",
    description: "验证数据写入、更新、删除和一致性。",
    statements: [
      s("我需要检查数据库里的记录。", "I need to check the records in the database."),
      s("保存后数据没有正确写入。", "The data was not saved correctly."),
      s("删除操作后关联数据还在。", "The related data still exists after deletion."),
      s("这个字段的值不符合预期。", "The value of this field is not as expected."),
      s("我们需要确认数据一致性。", "We need to confirm data consistency."),
      s("我会把查询结果贴出来。", "I will paste the query result."),
    ],
  },
  {
    title: "日志分析",
    description: "通过日志定位错误、请求链路和异常原因。",
    statements: [
      s("我正在查看服务端日志。", "I am checking the server logs."),
      s("日志里有一个空指针错误。", "There is a null pointer error in the logs."),
      s("这个请求没有到达后端。", "This request did not reach the backend."),
      s("错误发生在鉴权之后。", "The error happened after authentication."),
      s("我会把相关日志发给你。", "I will send you the related logs."),
      s(
        "从日志看，问题可能在配置里。",
        "Based on the logs, the issue may be in the configuration.",
      ),
    ],
  },
  {
    title: "测试数据",
    description: "准备、清理、复用和隔离测试数据。",
    statements: [
      s("我需要准备一组测试数据。", "I need to prepare a set of test data."),
      s(
        "这个账号已经被其他测试用例使用了。",
        "This account has already been used by another test case.",
      ),
      s(
        "我们需要避免测试数据互相影响。",
        "We need to avoid test data interfering with each other.",
      ),
      s("测试结束后我会清理数据。", "I will clean up the data after testing."),
      s("这个场景需要一个新用户。", "This scenario needs a new user."),
      s("我会记录数据准备步骤。", "I will document the data preparation steps."),
    ],
  },
  {
    title: "环境问题",
    description: "说明测试环境、配置、服务和依赖问题。",
    statements: [
      s("测试环境现在不可用。", "The test environment is unavailable now."),
      s("这个服务没有启动。", "This service is not running."),
      s("配置和预期不一致。", "The configuration is different from expected."),
      s("我需要确认环境变量。", "I need to confirm the environment variables."),
      s("这个问题在本地无法复现。", "This issue cannot be reproduced locally."),
      s("环境恢复后我会重新测试。", "I will retest after the environment is restored."),
    ],
  },
  {
    title: "Jira 缺陷流程",
    description: "描述创建、分配、更新、验证和关闭缺陷。",
    statements: [
      s("我会在 Jira 里创建一个缺陷。", "I will create a bug in Jira."),
      s("我已经把缺陷分配给对应开发。", "I have assigned the bug to the right developer."),
      s("这个缺陷需要更多信息。", "This bug needs more information."),
      s("状态已经改成等待验证。", "The status has been changed to ready for verification."),
      s("验证通过后我会关闭它。", "I will close it after verification passes."),
      s("我会在评论里更新测试结果。", "I will update the test result in the comments."),
    ],
  },
  {
    title: "严重程度与优先级",
    description: "区分 severity、priority、影响范围和处理顺序。",
    statements: [
      s("这个问题严重程度很高。", "The severity of this issue is high."),
      s("但它的优先级可以是中等。", "But its priority can be medium."),
      s("这个问题影响所有用户。", "This issue affects all users."),
      s("这个缺陷只影响一个边缘场景。", "This bug only affects an edge case."),
      s("我建议把优先级调高。", "I suggest raising the priority."),
      s(
        "我们需要根据业务影响决定优先级。",
        "We need to decide the priority based on business impact.",
      ),
    ],
  },
  {
    title: "稳定复现",
    description: "表达复现概率、复现条件和调查方向。",
    statements: [
      s("这个问题可以稳定复现。", "This issue can be reproduced consistently."),
      s(
        "我只在特定账号下复现了这个问题。",
        "I reproduced this issue only with a specific account.",
      ),
      s("复现概率大概是百分之五十。", "The reproduction rate is about fifty percent."),
      s("我还没有找到稳定复现步骤。", "I have not found stable steps to reproduce it yet."),
      s("这个问题看起来和缓存有关。", "This issue seems related to caching."),
      s("我会继续缩小复现范围。", "I will keep narrowing down the reproduction scope."),
    ],
  },
  {
    title: "根因协作",
    description: "和研发一起定位根因，而不只是抛问题。",
    statements: [
      s("我想和你一起看一下根因。", "I would like to look into the root cause with you."),
      s("我怀疑问题出在状态更新之后。", "I suspect the issue happens after the state update."),
      s("这个日志可以帮助我们定位。", "This log can help us locate the issue."),
      s("我可以提供更多测试数据。", "I can provide more test data."),
      s("我们先确认是不是前端问题。", "Let's first confirm whether it is a frontend issue."),
      s("定位清楚后我会补充测试用例。", "After we identify the cause, I will add test cases."),
    ],
  },
  {
    title: "自动化框架",
    description: "说明框架结构、复用、维护和覆盖策略。",
    statements: [
      s(
        "这个自动化框架需要更容易维护。",
        "This automation framework needs to be easier to maintain.",
      ),
      s("公共登录逻辑可以抽出来复用。", "The common login logic can be extracted and reused."),
      s("测试数据应该独立管理。", "Test data should be managed separately."),
      s("我们需要减少用例之间的依赖。", "We need to reduce dependencies between test cases."),
      s("这个断言可以更明确。", "This assertion can be more explicit."),
      s("我会把稳定性作为优先目标。", "I will make stability the top priority."),
    ],
  },
  {
    title: "Playwright 定位器",
    description: "用外企常见方式讨论 selector、locator 和 flaky 测试。",
    statements: [
      s("这个定位器不够稳定。", "This locator is not stable enough."),
      s("我建议使用角色定位。", "I suggest using role-based locators."),
      s("这个元素缺少可访问名称。", "This element is missing an accessible name."),
      s("等待网络空闲不一定可靠。", "Waiting for network idle is not always reliable."),
      s("我们应该等待具体的 UI 状态。", "We should wait for a specific UI state."),
      s("这个改动可以减少 flaky 测试。", "This change can reduce flaky tests."),
    ],
  },
  {
    title: "Postman 与接口测试",
    description: "讨论请求参数、环境变量、集合和断言。",
    statements: [
      s("我会用 Postman 验证这个接口。", "I will verify this API with Postman."),
      s("请求头里需要带 token。", "The request header needs a token."),
      s("这个环境变量没有配置。", "This environment variable is not configured."),
      s("我会把接口加入集合。", "I will add the API to the collection."),
      s(
        "响应断言需要检查状态码和字段。",
        "The response assertion needs to check the status code and fields.",
      ),
      s("我会导出测试结果。", "I will export the test results."),
    ],
  },
  {
    title: "契约与接口变更",
    description: "处理 API contract、字段变更和前后端协作。",
    statements: [
      s("这个字段名发生了变化。", "The field name has changed."),
      s("这个变更会影响前端解析。", "This change will affect frontend parsing."),
      s("我们需要更新接口契约。", "We need to update the API contract."),
      s("旧字段是否还会保留一段时间？", "Will the old field be kept for a while?"),
      s("我会补充兼容性测试。", "I will add compatibility tests."),
      s(
        "接口稳定后我会更新自动化用例。",
        "After the API is stable, I will update the automated tests.",
      ),
    ],
  },
  {
    title: "流水线与发布门禁",
    description: "表达 CI、质量门禁、阻塞和放行建议。",
    statements: [
      s("流水线还没有通过。", "The pipeline has not passed yet."),
      s("这个失败会阻塞发布。", "This failure will block the release."),
      s("质量门禁需要保持严格。", "The quality gate needs to stay strict."),
      s("我们可以先修复失败用例。", "We can fix the failed tests first."),
      s("如果只是环境问题，可以重新运行。", "If it is only an environment issue, we can rerun it."),
      s(
        "测试通过后我会给出发布建议。",
        "After testing passes, I will give the release recommendation.",
      ),
    ],
  },
  {
    title: "发布签核",
    description: "给出 QA sign-off、条件通过和风险说明。",
    statements: [
      s("从 QA 角度看，我同意发布。", "From a QA perspective, I agree with the release."),
      s("这个版本还有一个已知问题。", "This version still has one known issue."),
      s("这个问题不影响核心流程。", "This issue does not affect the core flow."),
      s("我建议带着这个风险发布。", "I suggest releasing with this known risk."),
      s(
        "如果业务不能接受，我们应该延期。",
        "If the business cannot accept it, we should delay the release.",
      ),
      s("我会把发布风险写清楚。", "I will clearly document the release risks."),
    ],
  },
  {
    title: "线上监控",
    description: "观察线上指标、错误率、反馈和异常。",
    statements: [
      s("发布后我会关注线上数据。", "After the release, I will monitor the production data."),
      s("错误率目前没有明显上升。", "The error rate has not increased significantly."),
      s("用户反馈目前正常。", "User feedback looks normal so far."),
      s("这个异常需要继续观察。", "This anomaly needs further monitoring."),
      s("如果指标恶化，我们需要回滚。", "If the metrics get worse, we need to roll back."),
      s("我会每小时同步一次状态。", "I will share the status every hour."),
    ],
  },
  {
    title: "线上事故沟通",
    description: "在事故中保持清楚、冷静、可执行。",
    statements: [
      s("我们正在处理一个线上问题。", "We are handling a production issue."),
      s("目前影响范围还在确认中。", "The impact scope is still being confirmed."),
      s("我们已经定位到可疑模块。", "We have identified the suspicious module."),
      s("临时方案已经准备好了。", "The workaround is ready."),
      s("根因分析会在事后补充。", "The root cause analysis will be added afterward."),
      s("我会继续验证修复效果。", "I will continue verifying the fix."),
    ],
  },
  {
    title: "客服反馈转测试",
    description: "把用户反馈转化为可验证的问题。",
    statements: [
      s(
        "这个用户反馈需要转成测试场景。",
        "This user feedback needs to be turned into a test scenario.",
      ),
      s("我们需要更多用户操作信息。", "We need more information about the user's actions."),
      s("这个问题可能只影响特定地区。", "This issue may only affect a specific region."),
      s("我会尝试用同样的账号类型复现。", "I will try to reproduce it with the same account type."),
      s("如果能复现，我会创建缺陷。", "If I can reproduce it, I will create a bug."),
      s("这个反馈可以帮助我们补充用例。", "This feedback can help us add test cases."),
    ],
  },
  {
    title: "测试结果汇报",
    description: "向团队和管理者汇报覆盖范围、结果和风险。",
    statements: [
      s("本轮测试已经完成。", "This round of testing has been completed."),
      s("我们一共发现了十二个缺陷。", "We found twelve bugs in total."),
      s("其中两个是高优先级问题。", "Two of them are high-priority issues."),
      s("核心流程已经全部通过。", "All core flows have passed."),
      s("剩余风险主要在兼容性方面。", "The remaining risks are mainly related to compatibility."),
      s("详细结果请看测试报告。", "Please see the test report for detailed results."),
    ],
  },
  {
    title: "质量指标",
    description: "描述缺陷数量、通过率、覆盖率和趋势。",
    statements: [
      s("本周缺陷数量下降了。", "The number of bugs decreased this week."),
      s("自动化通过率是百分之九十五。", "The automation pass rate is ninety-five percent."),
      s("回归测试覆盖了核心模块。", "Regression testing covered the core modules."),
      s("高优先级缺陷都已经关闭。", "All high-priority bugs have been closed."),
      s("这个趋势说明质量在提升。", "This trend shows that quality is improving."),
      s("我们还需要提升接口测试覆盖率。", "We still need to improve API test coverage."),
    ],
  },
  {
    title: "Sprint 计划",
    description: "在敏捷流程中安排测试工作和风险。",
    statements: [
      s("这个 Sprint 的测试工作比较重。", "The testing workload is heavy in this sprint."),
      s("我需要提前参与需求讨论。", "I need to join the requirement discussion earlier."),
      s("这个故事需要更多测试时间。", "This story needs more testing time."),
      s("我们应该把测试任务拆小。", "We should break the testing tasks into smaller pieces."),
      s("我会在计划会上提出风险。", "I will raise the risks during planning."),
      s(
        "如果开发延期，测试时间会被压缩。",
        "If development is delayed, testing time will be compressed.",
      ),
    ],
  },
  {
    title: "QA 复盘",
    description: "总结测试过程中的问题、改进和经验。",
    statements: [
      s("这次测试开始得有点晚。", "Testing started a bit late this time."),
      s(
        "需求变更多，导致用例频繁调整。",
        "There were many requirement changes, so test cases changed frequently.",
      ),
      s("我们需要更早识别风险。", "We need to identify risks earlier."),
      s("自动化覆盖帮我们节省了时间。", "Automation coverage helped us save time."),
      s("下次我们可以提前准备测试数据。", "Next time, we can prepare test data earlier."),
      s("我会把这些改进点记录下来。", "I will document these improvement points."),
    ],
  },
  {
    title: "代码评审中的 QA 视角",
    description: "在 review 中从测试角度提出问题。",
    statements: [
      s("这个改动会影响哪些测试场景？", "Which test scenarios will this change affect?"),
      s("这里是否需要补充单元测试？", "Do we need to add unit tests here?"),
      s("这个异常分支没有处理。", "This error branch is not handled."),
      s("我建议增加一个边界用例。", "I suggest adding a boundary test case."),
      s("这个逻辑会影响旧数据吗？", "Will this logic affect old data?"),
      s("从 QA 角度看，这里有一个风险。", "From a QA perspective, there is a risk here."),
    ],
  },
  {
    title: "结对测试",
    description: "和开发一起复现、定位和验证问题。",
    statements: [
      s("我们可以一起结对测试一下。", "We can do pair testing together."),
      s("我来操作，你看一下日志。", "I will operate, and you can check the logs."),
      s("这个步骤之后问题就出现了。", "The issue appears after this step."),
      s("你能在本地复现吗？", "Can you reproduce it locally?"),
      s("我们先验证这个假设。", "Let's verify this hypothesis first."),
      s("这样可以更快定位问题。", "This can help us locate the issue faster."),
    ],
  },
  {
    title: "海外团队协作",
    description: "和不同时区、不同文化背景的同事协作。",
    statements: [
      s(
        "我会把问题写得更清楚，方便异步沟通。",
        "I will write the issue more clearly for async communication.",
      ),
      s("他们那边现在可能已经下班了。", "They may have already finished work in their time zone."),
      s("我们需要等海外团队确认。", "We need to wait for confirmation from the overseas team."),
      s("我会在消息里加上上下文。", "I will include the context in the message."),
      s("这个问题适合异步处理。", "This issue can be handled asynchronously."),
      s(
        "如果很紧急，我们可以安排一次同步会议。",
        "If it is urgent, we can schedule a sync meeting.",
      ),
    ],
  },
  {
    title: "时区协作",
    description: "安排跨时区会议、截止时间和交付窗口。",
    statements: [
      s("这个时间对欧洲团队不太方便。", "This time is not convenient for the Europe team."),
      s("我们需要找一个重叠时间。", "We need to find an overlapping time slot."),
      s("我会在你的上午发测试结果。", "I will send the test results in your morning."),
      s("截止时间是北京时间周五下午。", "The deadline is Friday afternoon Beijing time."),
      s("我们可以把会议录下来。", "We can record the meeting."),
      s("我会在会议前发出议程。", "I will send the agenda before the meeting."),
    ],
  },
  {
    title: "异步沟通",
    description: "写清楚背景、问题、期望动作和截止时间。",
    statements: [
      s("我把背景写在最前面。", "I put the background at the beginning."),
      s("这是我需要你确认的问题。", "This is the question I need you to confirm."),
      s("我列出了两个可选方案。", "I listed two possible options."),
      s("请在方便时给我反馈。", "Please give me feedback when you have time."),
      s(
        "如果没有异议，我会按方案一继续。",
        "If there are no objections, I will continue with option one.",
      ),
      s("我会在明天更新最终结果。", "I will update the final result tomorrow."),
    ],
  },
  {
    title: "礼貌表达不同意见",
    description: "在外企环境中清晰而不冒犯地表达不同看法。",
    statements: [
      s("我理解这个想法，但我有一点担心。", "I understand the idea, but I have one concern."),
      s("我可能有不同的看法。", "I may have a different perspective."),
      s(
        "从测试角度看，这里风险比较高。",
        "From a testing perspective, the risk is quite high here.",
      ),
      s("我们是否可以考虑另一个方案？", "Could we consider another approach?"),
      s("我不是反对，只是想降低风险。", "I am not against it; I just want to reduce the risk."),
      s("我们可以用数据来决定。", "We can use data to make the decision."),
    ],
  },
  {
    title: "澄清问题",
    description: "用自然英文问清楚不懂、不确定、不完整的信息。",
    statements: [
      s("你能再解释一下这个部分吗？", "Could you explain this part again?"),
      s("我不确定我是否理解正确。", "I am not sure if I understood it correctly."),
      s("这里的“完成”具体指什么？", "What exactly does 'done' mean here?"),
      s("你能给一个例子吗？", "Could you give me an example?"),
      s("这个规则适用于所有用户吗？", "Does this rule apply to all users?"),
      s("我想确认一下边界情况。", "I would like to confirm the edge cases."),
    ],
  },
  {
    title: "英文汇报开场",
    description: "做简短测试汇报、项目更新和会议开场。",
    statements: [
      s("我先快速同步一下测试进展。", "Let me quickly share the testing progress."),
      s("今天我会讲三个部分。", "Today I will cover three parts."),
      s("第一部分是测试范围。", "The first part is the test scope."),
      s("第二部分是测试结果。", "The second part is the test results."),
      s("最后是风险和下一步。", "The last part is risks and next steps."),
      s("如果有问题，可以随时打断我。", "If you have any questions, feel free to interrupt me."),
    ],
  },
  {
    title: "测试结果演示",
    description: "在会议中展示通过、失败、阻塞和风险。",
    statements: [
      s("这里是本轮测试的整体结果。", "Here are the overall results of this testing round."),
      s("大部分用例已经通过。", "Most test cases have passed."),
      s("失败用例主要集中在这个模块。", "The failed cases are mainly in this module."),
      s("这个问题目前阻塞发布。", "This issue is currently blocking the release."),
      s("我们已经有一个临时方案。", "We already have a workaround."),
      s("下一步是验证修复版本。", "The next step is to verify the fixed build."),
    ],
  },
  {
    title: "外企面试自我介绍",
    description: "用英语讲清楚测试经验、项目和优势。",
    statements: [
      s(
        "我是一名软件测试工程师，有三年经验。",
        "I am a software test engineer with three years of experience.",
      ),
      s("我主要测试 Web 和移动端应用。", "I mainly test web and mobile applications."),
      s(
        "我熟悉功能测试、回归测试和接口测试。",
        "I am familiar with functional testing, regression testing, and API testing.",
      ),
      s("我也有自动化测试经验。", "I also have experience with test automation."),
      s(
        "我喜欢从用户角度发现质量风险。",
        "I like finding quality risks from the user's perspective.",
      ),
      s("我希望加入一个国际化团队。", "I hope to join an international team."),
    ],
  },
  {
    title: "行为面试",
    description: "回答挑战、冲突、协作、失败和成长类问题。",
    statements: [
      s("我曾经处理过一个紧急线上问题。", "I once handled an urgent production issue."),
      s("当时我先确认影响范围。", "At that time, I first confirmed the impact scope."),
      s("然后我和开发一起定位根因。", "Then I worked with developers to identify the root cause."),
      s(
        "最后我们验证了修复并补充了回归用例。",
        "Finally, we verified the fix and added regression cases.",
      ),
      s("这件事让我学会了更早同步风险。", "This taught me to share risks earlier."),
      s(
        "我也学会了在压力下保持清晰沟通。",
        "I also learned to communicate clearly under pressure.",
      ),
    ],
  },
  {
    title: "职业目标",
    description: "表达进入外企、成长方向和学习计划。",
    statements: [
      s(
        "我的短期目标是提升英文工作沟通。",
        "My short-term goal is to improve my English communication at work.",
      ),
      s(
        "我的长期目标是成为更全面的 QA 工程师。",
        "My long-term goal is to become a more well-rounded QA engineer.",
      ),
      s(
        "我想进入外企积累国际团队经验。",
        "I want to join an international company and gain global team experience.",
      ),
      s("我正在系统学习自动化测试。", "I am systematically learning test automation."),
      s(
        "我希望承担更多质量保障责任。",
        "I hope to take on more quality assurance responsibilities.",
      ),
      s("我相信持续学习会带来机会。", "I believe continuous learning will bring opportunities."),
    ],
  },
  {
    title: "外企入职",
    description: "入职外企后的日常沟通、权限、流程和适应。",
    statements: [
      s("我需要申请系统权限。", "I need to request system access."),
      s("我还没有收到入职文档。", "I have not received the onboarding document yet."),
      s("我会先熟悉团队流程。", "I will get familiar with the team process first."),
      s("请告诉我测试环境在哪里。", "Please let me know where the test environment is."),
      s("我想了解质量发布流程。", "I would like to understand the quality release process."),
      s("谢谢你帮我完成入职。", "Thank you for helping me with onboarding."),
    ],
  },
];
