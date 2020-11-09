/*CMD
  command: Ask
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: _💬 How Can I Help You ?_
  keyboard: 
  aliases: 
CMD*/

let Ask = User.getProperty("Ask")
User.setProperty("Ask" , message ,"string")
Bot.sendMessage("*📩 Message sent to admin as :* "+message+"\n\n Check your Support Questions get answered in the below channel - \n\n @SantaBotSupport")
Api.sendMessage({ 
chat_id: "@SantaBotSupport", 
text: "Message From : "+user.first_name+" "+user.last_name+"\n\nUser ID - "+user.telegramid+"\n\nUsername - @"+user.username+"\n\n Message - "+message , 
parse_mode: "Markdown"})
