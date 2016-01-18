// ==UserScript==
// @name            Change EA Sim GUI Elements positions
// @description     Get back the disable unit button to old position.
// @author          VisiG
// @version         0.1
// @namespace       https://prodgame*.alliances.commandandconquer.com/*/index.aspx*
// @include         https://prodgame*.alliances.commandandconquer.com/*/index.aspx*
// @icon            
// @updateURL       https://github.com/VisiG/EASimGuiChanger/raw/master/EASimGUIChanger.js
// @downloadURL     https://github.com/VisiG/EASimGuiChanger/raw/master/EASimGUIChanger.js
// ==/UserScript==

(function () {
    var EASimGUIChanger_main = function () {
        function EASimGUIChanger_checkIfLoaded() {
			try {
				if (typeof qx !== 'undefined' && typeof qx.core !== 'undefined' && typeof qx.core.Init !== 'undefined') {
					try {
                        app = qx.core.Init.getApplication();
                        
                        rightGUIBar = app.getRightBar();
                        ArmySetupAttackBar = app.getArmySetupAttackBar();
                        rightAttackBar = ArmySetupAttackBar.getChildren()[2].getChildren()[1].getChildren()[8];
                        EASimAttackBar = ArmySetupAttackBar.getChildren()[0].getChildren()[1];
                        unitDisableButton = EASimAttackBar.getChildren()[8]; // enable disable button
                        playButton = ArmySetupAttackBar.getChildren()[2].getChildren()[1].getChildren()[8].getChildren()[1];
                        
                        if(rightGUIBar === null || rightAttackBar === null || unitDisableButton === null || playButton === null)
                        {
                            window.setTimeout(EASimGUIChanger_checkIfLoaded, 1000);
                        }
                        else
                        {
                            rightGUIBar.removeAt(3);
                            rightAttackBar.removeAt(1);
                            //ArmySetupAttackBar.getChildren()[2].getChildren()[1].getChildren()[8].getChildren()[1]; // play button
                            rightAttackBar.addAt(unitDisableButton, 1);
                            
                            EASimAttackBar.addAt(playButton, 8);
                        }
                    } catch (e) {
                        window.setTimeout(EASimGUIChanger_checkIfLoaded, 1000);
                    }
				} else {
					window.setTimeout(EASimGUIChanger_checkIfLoaded, 1000);
				}
			} catch (e) {
				console.log("EASimGUIChanger_checkIfLoaded: ", e);
			}
		}

		if (/commandandconquer\.com/i.test(document.domain)) {
			window.setTimeout(EASimGUIChanger_checkIfLoaded, 1000);
		}
    }
    
  try {
    var script = document.createElement("script");
    script.innerHTML = "(" + EASimGUIChanger_main.toString() + ")();";
    script.type = "text/javascript";
    document.getElementsByTagName("head")[0].appendChild(script);
  } catch (e) {
    console.log("EASimGUIChanger: init error: ", e);
  }
  
})();
