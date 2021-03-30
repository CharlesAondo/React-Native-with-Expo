
export const brandsImages =(isHuman,isVet) =>{
      var src = '';
      if(isHuman && isVet){
            src=require('../assets/brands/FootPawPrint.png')
      }else if(isHuman && !isVet){
            src=require('../assets/brands/FootPrint.png')
 
      }else if(isVet && !isHuman){
            src=require('../assets/brands/PawPrint.png')
      }else{
            src = '';
      }
      return src;
}