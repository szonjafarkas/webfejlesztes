document.getElementById("gomb").addEventListener("click", function(bekuldes){
        let vander = 0;
        let jinx = 0;
        let vi = 0;
        let silco = 0;
        let caitlyn = 0;
        let jayce = 0;
        let heimerdinger = 0;
        let ekko = 0;
      
        /*Szín */
      
        if(document.getElementById("red").checked)
        {vander++;}
        if(document.getElementById("blue").checked)
        {jinx++;}
        if(document.getElementById("pink").checked)
        {vi++;}
        if(document.getElementById("green").checked)
        {silco++;}
        if(document.getElementById("purple").checked)
        {caitlyn++;}
        if(document.getElementById("gold").checked)
        {jayce++;}
        if(document.getElementById("brown").checked)
        {heimerdinger++;}
        if(document.getElementById("yellow").checked)
        {ekko++;}
      
        /*Állat */
        if(document.getElementById("bull").checked)
        {vander++;}
        if(document.getElementById("fox").checked)
        {caitlyn++;}
        if(document.getElementById("cat").checked)
        {silco++;}
        if(document.getElementById("dog").checked)
        {vi++;}
        if(document.getElementById("snake").checked)
        {jinx++;}
        if(document.getElementById("dolphin").checked)
        {ekko++;}
        if(document.getElementById("squirrel").checked)
        {heimerdinger++;}
        if(document.getElementById("lion").checked)
        {jayce++;}
      
        /*Tulajdonságok */
        if(document.getElementById("t1").checked)
        {vander++;}
        if(document.getElementById("t2").checked)
        {caitlyn++;}
        if(document.getElementById("t3").checked)
        {jinx++;}
        if(document.getElementById("t4").checked)
        {ekko++;}
        if(document.getElementById("t5").checked)
        {jayce++;}
        if(document.getElementById("t6").checked)
        {caitlyn++;}
        if(document.getElementById("t7").checked)
        {vi++;}
        if(document.getElementById("t8").checked)
        {silco++;}
        if(document.getElementById("t9").checked)
        {heimerdinger++;}
        if(document.getElementById("t10").checked)
        {vi++;}
      
        /*Foglalkozás */
        if(document.getElementById("research").checked)
        {jayce++;}
        if(document.getElementById("engineer").checked)
        {jinx++;}
        if(document.getElementById("trade").checked)
        {vander++;}
        if(document.getElementById("society").checked)
        {heimerdinger++;}
        if(document.getElementById("alchemist").checked)
        {silco++;}
        if(document.getElementById("criminal").checked)
        {ekko++;}

        /*Eredmény */
        if(vander>=jinx && vander>=vi && vander>=silco && vander>=caitlyn && vander>=jayce && vander>=heimerdinger && vander>=ekko)
        {document.getElementById("eredmeny").innerHTML="Vander would be your best friend!";
        document.getElementById("leiras").innerHTML="He is kindhearted and protective man. He would make an excellent best friend,";}
        if(jinx>=vander && jinx>=vi && jinx>=silco && jinx>=caitlyn && jinx>=jayce && jinx>=heimerdinger && jinx>=ekko)
        {document.getElementById("eredmeny").innerHTML="Jinx would be your best friend!";
        document.getElementById("leiras").innerHTML="She is a little crazy and might shoot you. As her best friend you certainly would never be bored.";}
        if(vi>=jinx && vi>=vander && vi>=silco && vi>=caitlyn && vi>=jayce && vi>=heimerdinger && vi>=ekko)
        {document.getElementById("eredmeny").innerHTML="Vi would be your best friend!";
        document.getElementById("leiras").innerHTML="She is really brave and a real fighter. If you ever go to Zaun make sure to bring her along. She knows the city really well and she would protect you with her life.";}
        if(silco>=jinx && silco>=vi && silco>=vander && silco>=caitlyn && silco>=jayce && silco>=heimerdinger && silco>=ekko)
        {document.getElementById("eredmeny").innerHTML="Silco would be your best friend!";
        document.getElementById("leiras").innerHTML="He is an important man in Zaun. If he is fond of you than he is one of the best people to be friends with because he would do anything to keep you safe. Otherwise it would be wise to stay away from him because he might manipulate you into being one of his lab rats.";}
        if(caitlyn>=jinx && caitlyn>=vi && caitlyn>=silco && caitlyn>=vander && caitlyn>=jayce && caitlyn>=heimerdinger && caitlyn>=ekko)
        {document.getElementById("eredmeny").innerHTML="Caitlyn would be your best friend!";
        document.getElementById("leiras").innerHTML="She is curious, kind and rich. She is one of the best detectives you could ever ask for and she would make a truly a great friend";}
        if(jayce>=jinx && jayce>=vi && jayce>=silco && jayce>=caitlyn && jayce>=vander && jayce>=heimerdinger && jayce>=ekko)
        {document.getElementById("eredmeny").innerHTML="Jayce would be your best friend!";
        document.getElementById("leiras").innerHTML="He is smart and innovative. He is not afraid to take risks in the name of science. Anyone would be lucky to have him as a friend.";}
        if(heimerdinger>=jinx && heimerdinger>=vi && heimerdinger>=silco && heimerdinger>=caitlyn && heimerdinger>=jayce && heimerdinger>=vander && heimerdinger>=ekko)
        {document.getElementById("eredmeny").innerHTML="Heimerdinger would be your best friend!";
        document.getElementById("leiras").innerHTML="He is more than 300 hundred years old and that makes him wiser than most people around him. He has good intentions. Just don't talk about magic around him...";}
        if(ekko>=jinx && ekko>=vi && ekko>=silco && ekko>=caitlyn && ekko>=jayce && ekko>=heimerdinger && ekko>=vander)
        {document.getElementById("eredmeny").innerHTML="Ekko would be your best friend!";
        document.getElementById("leiras").innerHTML="He is a great spy. Being his friend would mean you would know all the gossip about everyone.";}







      
})