/**
 * 간단한 계산기
 * 
 * 전원 버튼 만들기 ON/OFF -> o
 * 전원 ON 시 위쪽에 0 뜨게 하기 -> o
 * 전원 OFF 시 위쪽 숫자 없애기 -> o
 * 초기화 버튼 만들기
 *      - CE(Clear Entry) 버튼은 현재 입력 중인 숫자만 지우는 기능 -> o
 *      - C(Clear) 버튼은 현재 입력한 숫자와 이전 계산 결과까지 모두 지우는 전체 삭제(All Clear) 기능
 * 0-9 값을 가지는 버튼 각각 생성
 * +, - , *, /, %, = 버튼 각각 생성
 * 연산자 버튼 눌렀을 때 각각의 이벤트 실행하도록
 * 
 * ce 버튼 이벤트 수정
 */

window.onload = function() {

    const isOutNum = document.getElementById("output-num");
    const entryNum = 0; // 초기화 값
    const tempNum = 0; // temp 값(지금까지 계산된 값)
    const resultNum = 0; // 총 계산 결과 값
    const pushNum1 = document.getElementById("button1");
    const pushNum2 = document.getElementById("button2");
    const pushNum3 = document.getElementById("button3");
    const pushNum4 = document.getElementById("button4");
    const pushNum5 = document.getElementById("button5");
    const pushNum6 = document.getElementById("button6");
    const pushNum7 = document.getElementById("button7");
    const pushNum8 = document.getElementById("button8");
    const pushNum9 = document.getElementById("button9");
    const pushNum0 = document.getElementById("button0");
    
    
    /**
     * on/off 상태 & on/off 버튼 생성
     * on 상태 -> true 
     * off 상태 -> false
     * */ 
    var isOnOffState = false;
    
    const isOnOffButtons = document.createElement("button");
    
    isOnOffButtons.textContent = "ON";
    isOnOffButtons.style.color = "red";
    isOnOffButtons.style.position = "absolute";
    isOnOffButtons.style.left = "42.3%";
    isOnOffButtons.style.top = "35%";
    isOnOffButtons.style.width = "40px";
    isOnOffButtons.style.height = "40px";
    isOnOffButtons.style.fontSize = "10px";
    isOnOffButtons.style.textAlign = "center";

        
        // on/off 버튼 이벤트
        isOnOffButtons.addEventListener('click', () => {
            
            if(isOnOffState == false) {
                isOnOffState = true;
                isOnOffButtons.textContent = "OFF"
                isOnOffButtons.style.backgroundColor = "red";
                isOnOffButtons.style.color = "white";
                isOutNum.textContent = entryNum;
            }
            else if(isOnOffState == true) {
                isOnOffState = false;
                isOnOffButtons.textContent = "ON"
                isOnOffButtons.style.color = "red";
                isOnOffButtons.style.backgroundColor = "white";
                isOutNum.textContent = null;
            }
        });
        
        document.getElementById("button-parents").appendChild(isOnOffButtons);
        
    /**
     * 초기화 상태 & ce 버튼 생성
     * */ 
    var ceState = false;
        
    //clearEntry 버튼 생성
    
    const clearButton = document.createElement("button");

        clearButton.textContent = "C";
        clearButton.style.backgroundColor = "grey";
        clearButton.style.position = "absolute";
        clearButton.style.left = "56.3%";
        clearButton.style.top = "35%";
        clearButton.style.width = "40px";
        clearButton.style.height = "40px";
        clearButton.style.fontSize = "10px";
        clearButton.style.textAlign = "center";

        
    clearButton.addEventListener('click', () => {

        if (isOnOffState != false) {
            if(ceState == false) {
                isOutNum.textContent = entryNum;
                console.log("초기화!");
            }
        }
    });
        
        document.getElementById("button-parents").appendChild(clearButton);

    /**
     * + 버튼 생성
     */

    const sumButton = document.createElement('button');

    sumButton.textContent = "+";
    sumButton.style.width = "40px";
    sumButton.style.height = "40px";
    sumButton.style.position = "absolute";
    sumButton.style.top = "35%";
    sumButton.style.left = "45.3%";

    sumButton.addEventListener('click', () => {
        tempNum += 0;
        
    });

    document.getElementById("button-parents").appendChild(sumButton);

    /**
     * 숫자 버튼 생성
     */

    //button1
    const button1 = document.createElement('button');
    button1.textContent = "1";
    button1.style.width = "60px";
    button1.style.height = "60px";

    //click event
    button1.addEventListener('click', () => {
        console.log("1");
    });
    document.getElementById("num-button-first-line").appendChild(button1);

    //button2
    const button2 = document.createElement('button');
    button2.textContent = "2";
    button2.style.width = "60px";
    button2.style.height = "60px";

    //click event
    button2.addEventListener('click', () => {
        console.log("2");
    });
    document.getElementById("num-button-first-line").appendChild(button2);
    
    //button3
    const button3 = document.createElement('button');
    button3.textContent = "3";
    button3.style.width = "60px";
    button3.style.height = "60px";

    //click event
    button3.addEventListener('click', () => {
        console.log("3");
    });
    document.getElementById("num-button-first-line").appendChild(button3);

    //button4
    const button4 = document.createElement('button');
    button4.textContent = "4";
    button4.style.width = "60px";
    button4.style.height = "60px";
    

    //click event
    button4.addEventListener('click', () => {
        console.log("4");
    });
    document.getElementById("num-button-second-line").appendChild(button4);

}
