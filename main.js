/**
 * Created by sohaib on 4/20/16.
 */
var slack=require('node-slackr');
module.exports=function () {
   // console.log("helo")
    var slackNotifyService = new slack("https://hooks.slack.com/services/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", {
        channel: "#test",
        username: "Blankcanvas"
    });
    return slackNotifyService;
};

//module.exports=require('node-slackr');