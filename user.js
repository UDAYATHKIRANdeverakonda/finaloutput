class User
{

constructor() 
{
  this.index=null;
  this.email=null;
  this.input=null;
  this.radio1=null;
  this.radio2=null;
  this.radio3=null;
  this.radio4=null;
  this.description=null;


}
 getCount()
 {
    var playerCountRef=database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
    playerCount=data.val();
    })





 }

 updateCount(count)
 {
    database.ref('/').update({
    playerCount:count
    })
}

update()
{
   var PlayerIndex="players/player"+this.index;
   database.ref(PlayerIndex).set({
   input:this.input,
   email:this.email,
   radio1:this.radio1,
   radio2:this.radio2,
   radio3:this.radio3,
   radio4:this.radio4,
   description:this.description
 })
}


reset()
{
 this.index=null;
 this.email=null;
 this.input=null;
 this.radio1=null;
 this.radio2=null;
 this.radio3=null;
 this.radio4=null;

  



}










}