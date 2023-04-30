import { logowanie2user } from "./pages/log" ;

const logUse = new logowanie2user
        
    describe("LogInOut", () => {
        it("Log2User", () => {
         
            logUse.logowanieUserFirst();

            logUse.logowanieUserSecond();

            logUse.menuStrony();

            


       });
   });