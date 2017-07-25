/**
 * Created by bang on 24/07/2017.
 */

i18next.init({
    lng: 'ch',
    debug: true,
    resources: {
        ch: {
            translation: {
                //login.html
                "Username": "用户名",
                "Password":"密码",
                "Forget":"忘记密码？",
                "Login":"登录",
                "Reset":"重置密码",
                "ReadyToTryAgain":"再次尝试？",
                //account
                "Update":"更新密码",
                "Current":"当前密码",
                "Newpw":"新密码",
                "Repeatpw":"确认新密码",
                "B_update":"确定更新",
                "LeaveTeam":"离队并且注销账号",
                "Warn":"【警告】这将是永久性操作！！一旦成功无法撤销！！",
                "Warn2":"【警告】注销你的账号你将被从你所参加的团队中清除，为其他队员腾出加入的席位。一旦你注销账号之后你讲无法再次登录，已经注销的账号无法重新激活。",
                "Disacc":"注销账号",
                //Classroom
                "teacher1":"你已经创建了一个指导教师账号，这将允许你在你的课程下管理不同的团队。\n在这个页面下，你可创建新的团队，检查每个团队属于哪门课程，并可以检查每组成员信息。",
                "teacher2":"请注意，你无法自动添加团队成员到某一课程下。相反，你可以向学生提供你自己的用户名和课程信息，让他们在自己的账号界面下的【团队】界面参加您的课程",
                "loading":"加载中。。。",
                "Member":"团队成员:",
                "ThisClassCur":"这门课程目前没有团队参加。学生可以通过访问【小组】页面加入本门课程并成为本门课程中的一员",
                "Classname":"课程名",
                "teachername":"教师名",
                "FollewedByPressing":"按下【加入】按钮，每个团队只有一个学生需要加入一个属于本课程的团队",
                "newClass":"新课程",
                "CreateNew":"创建新课程",
                "WhatDoYou":"你想为你的课程取个什么名字？",
                //index
                "register":"现在注册吧！",
                //news
                "sub":"订阅",
                "via":"通过RSS",
                //Problems
                "Solve":"解决",
                "Hint":"提示",
                "Review":"检查",
                "Submit":"提交",
                "YouHaveAlready":"你已经检查过这个问题了。如果可能，请您提供一些补充内容。",
                "HowLongDid":"这个问题花费了你多长时间解决？",
                "AnyOtherThoughts":"还有其它的想法吗？",
                "SendFeedback":"确认反馈",
                //reset
                "update":"更新用户密码",
                "b_update":"确认更新",
                //Scoreboard
                "Score":"分数",
                "Public":"公共",
                "Teamname":"团队名称",
                "Affiliation":"关系",
                "NoTeamsHave":"目前为止没有团队得分。",
                //Shell
                "ThePasswordWill":"当你输入的时候密码不会显示。",
                //Team
                "TeamScoreProgression":"团队得分进程",
                "ClassMembership":"课程成员",
                "Teacher":"教师",
                "Join":"加入",
                "Passphrase":"你的团队密令是",
                "Team":"团队",
                "YouMayHave":"你最多还可以有",
                "OnYourTeam":"个成员在你的团队。",
                "NewTeamMembers":"新成员可以随时加入你的团队。",
                "YourTeamIs":"你的团队已经满员了，不允许其他成员再加入。",
                "YourTeamIsE":"你的团队是合适的（",
                "YourTeamIsI":"你的团队是不合适的（",
                ")":"）。",
                "SeeExplanation":"说明如下：",
                "Achievements":"成就",
                "YouCurrentlyHave":"你目前没有任何成就。通过成功解决挑战和问题你可以获得成就。",
                //About
                "ThisIsAbout":"北京航空航天大学软件开发环境国家重点实验室",
            }
        },
    }
}, function(err, t) {
    // init set content
    updateContent();
});

function updateContent() {
    //login.html
    $("#login-form label").html(i18next.t('Username'));
    $("#login-form label:eq(1)").html(i18next.t('Password'));
    $("#login-button").html(i18next.t('Login'));
    $(".toggle-login-ui:first").html(i18next.t('Forget'));
    $("#reset-password-button").html(i18next.t('Reset'));
    $("#password-reset-form label").html(i18next.t('Username'));
    $("#ready").html(i18next.t('ReadyToTryAgain'));
    //account
    $("#body_account h3.panel-title:first").html(i18next.t('Update'));
    $("#body_account h3.panel-title:last").html(i18next.t('LeaveTeam'));
    $("#body_account .control-label:eq(0)").html(i18next.t('Current'));
    $("#body_account .control-label:eq(1)").html(i18next.t('Newpw'));
    $("#body_account .control-label:eq(2)").html(i18next.t('Repeatpw'));
    $("#body_account .control-label:eq(3)").html(i18next.t('Current'));
    $("#password-update-button").html(i18next.t('B_update'));
    $("#body_account em").html(i18next.t('Warn'));
    $("#disable-account-form p").html(i18next.t('Warn2'));
    $("#disable-account-button").html(i18next.t('Disacc'));
    //classroom
    $("#body_classroom .col-md-12 p:first").html(i18next.t('teacher1'));
    $("#body_classroom .col-md-12 p:last").html(i18next.t('teacher2'));
    $("#body_classroom #team-selection-template").contents().find(".team-visualizer").html(i18next.t('loading'));
    $("#body_classroom #team-selection-template").contents().find("h3").html(i18next.t('Member'));
    $("#body_classroom #team-selection-template").contents().find("p:eq(0)").html(i18next.t('ThisClassCur'));
    $("#body_classroom #team-selection-template").contents().find("p:eq(1) strong:eq(0)").html(i18next.t('Classname'));
    $("#body_classroom #team-selection-template").contents().find("p:eq(1) strong:eq(1)").html(i18next.t('teachername'));
    $("#body_classroom #team-selection-template").contents().find("p:eq(2)").html(i18next.t('FollowedByPressing'));
    $("#body_classroom #group-info-template").contents().find("#new-class-tab").html(i18next.t('newClass'));
    $("#body_classroom #group-info-template").contents().find("button").html(i18next.t('CreateNew'));
    $("#body_classroom #new-group-template").contents().find("p").html(i18next.t('WhatDoYou'));
    //index
    $("#body_index h2").html(i18next.t('register'));
    //news
    //replaceWith
    //1.$(#body_news p).contents()[0].replaceWith('')
    //2.$(#body_news p).contents()[0].textContext()=""
    $("#body_news p").contents().eq(0).replaceWith(i18next.t('sub'));
    $("#body_news p").children().html(i18next.t('via'));
    //$("#body_news a").html(i18next.t('via'));
   // $("#body_news p").text(i18next.t('sub'));
    //Problems
    $("#problem-template").contents().find("li a:eq(0)").html(i18next.t('Solve'));
    $("#problem-template").contents().find("li a:eq(1)").html(i18next.t('Hint'));
    $("#problem-template").contents().find("li a:eq(2)").html(i18next.t('Review'));
    $("#problem-submit-template").contents().find("h4").html(i18next.t('Hint'));
    $("#problem-submit-template").contents().find("button").html(i18next.t('Submit'));
    $("#problem-review-template").contents().find(".label-default").html(i18next.t('YouHaveAlready'));
    $("#problem-review-template").contents().find("h4").html(i18next.t('HowLongDid'));
    $("#problem-review-template").contents().find("h4:last").html(i18next.t('AnyOtherThoughts'));
    $("#problem-review-template").contents().find("button").html(i18next.t('SendFeedback'));
    //reset
    $("#Reset_update").html(i18next.t('update'));
    $("#password-reset-button").html(i18next.t('b_update'));
    //Scoreboard
    $("#scoreboard-teamscore-template").contents().find("h3").html(i18next.t('Score'));
    $("#scoreboard-tabs-template").contents().find("a").html(i18next.t('Public'));
    $("#scoreboard-template").contents().find("th:eq(1)").html(i18next.t('Teamname'));
    $("#scoreboard-template").contents().find("th:eq(2)").html(i18next.t('Affilication'));
    $("#scoreboard-template").contents().find("th:eq(3)").html(i18next.t('Score'));
    $("#scoreboard-template").contents().find(".text-center").html(i18next.t('NoTeamsHave'));
    //Shell
    $("#shell-account-credentials-template").contents().find("p").html(i18next.t('Username'));
    $("#shell-account-credentials-template").contents().find("div:last").html(i18next.t('ThePasswordWill'));
    //Team
    $("#body_team h3").html(i18next.t('TeamScoreProgression'));
    $("#body_team #group-info-template").contents().find("h3").html(i18next.t('ClassMembership'));
    $("#body_team #group-info-template").contents().find("th:eq(1)").html(i18next.t('Classname'));
    $("#body_team #group-info-template").contents().find(".sr-only:eq(0)").html(i18next.t('Classname'));
    $("#body_team #group-info-template").contents().find(".sr-only:eq(1)").html(i18next.t('Teacher'));
    $("#body_team #group-info-template").contents().find("button").html(i18next.t('Join'));
    $("#body_team #team-info-template").contents().find("h3").contents()[0].textContent=i18next.t('Team');
    $("#body_team #team-info-template").contents().find("p:eq(0)").contents()[0].textContent=i18next.t('Passphrase');
    $("#body_team #team-info-template").contents().find("p:eq(1)").html(i18next.t('Member'));
    $("#body_team #team-info-template").contents().find("p:eq(2)").contents()[0].textContent=i18next.t('YouMayHave');
    $("#body_team #team-info-template").contents().find("p:eq(2)").contents()[2].textContent=i18next.t('OnYourTeam');
    $("#body_team #team-info-template").contents().find("p:eq(3)").html(i18next.t('NewTeamMembers'));
    $("#body_team #team-info-template").contents().find("p:eq(4)").html(i18next.t('YourTeamIs'));
    $("#body_team #team-info-template").contents().find("p:eq(5)").html(i18next.t('YourTeamIsE'));
    $("#body_team #team-info-template").contents().find("p:eq(6)").contents()[0].textContent=i18next.t('YourTeamIsI');
    $("#body_team #team-info-template").contents().find("p:eq(6)").contents()[2].textContent=i18next.t(')');
    $("#body_team #team-info-template").contents().find("p:eq(6) a").html(i18next.t('SeeExplanation'));
    $("#body_team #achievement-info-template").contents().find("h3").html(i18next.t('Achievements'));
    $("#body_team #achievement-info-template").contents().find("td").html(i18next.t('YouCurrentlyHave'));
    //About
    $("#about_state").html(i18next.t('ThisIsAbout'));





}