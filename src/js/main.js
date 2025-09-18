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
let isOutNum = document.getElementById("output-num");
let tempNum = null;// temp 값(지금까지 계산된 값)
const entryNum = 0; // 초기화 값
let stringNum = ""; // 총 계산 결과 값
if(tempNum != null) {
    isOutNum.textContent = `${tempNum}`;
}
window.onload = function() {

    /**
     * on/off 상태 & on/off 버튼 생성
     * on 상태 -> true 
     * off 상태 -> false
     * */ 
    let isOnOffState = false;
    
    const isOnOffButtons = document.createElement("button");
    
    isOnOffButtons.textContent = "ON";
    isOnOffButtons.style.color = "red";
    isOnOffButtons.style.width = "40px";
    isOnOffButtons.style.height = "40px";
    isOnOffButtons.style.fontSize = "10px";
    isOnOffButtons.style.textAlign = "center";

        
        // on/off 버튼 이벤트
        isOnOffButtons.addEventListener('click', () => {
            
            if(isOnOffState == false) {
                isOnOffState = true;
                console.log(isOnOffState);
                isOnOffButtons.textContent = "OFF"
                isOnOffButtons.style.backgroundColor = "red";
                isOnOffButtons.style.color = "white";
                isOutNum.textContent = 0;
                tempNum = 0;
                console.log("tempNum  = " + tempNum);
            }
            else if(isOnOffState == true) {
                isOnOffState = false;
                console.log(isOnOffState);
                isOnOffButtons.textContent = "ON"
                isOnOffButtons.style.color = "red";
                isOnOffButtons.style.backgroundColor = "white";
                isOutNum.textContent = null;
                tempNum = null;
                console.log("tempNum  = " + tempNum);
            }
        });
        
        
        
    /**
     * 초기화 상태 & ce 버튼 생성
     * */ 
    var ceState = false;
        
    //clearEntry 버튼 생성
    
    const clearButton = document.createElement("button");

        clearButton.textContent = "C";
        clearButton.style.backgroundColor = "grey";
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
        

    /**
     * + 버튼 생성
     */

    // + 버튼 상태
    var sumButtonState = false;
    const sumButton = document.createElement('button');

    sumButton.textContent = "+";
    sumButton.style.width = "40px";
    sumButton.style.height = "40px";

    sumButton.addEventListener('click', () => {
        sumButtonState = true;
        tempNum += 0;
    });

    /**
     * . 버튼 생성
     */
    const sosujumButton = document.createElement('button');

    sosujumButton.textContent = ".";
    sosujumButton.style.width = "60ox";
    sosujumButton.style.height = "60px";

    sosujumButton.addEventListener('click', () => {
        return ".";
    });
    /**
     * = 버튼 생성
     */
    const resultButton = document.createElement('button');

    resultButton.textContent = "=";
    resultButton.style.width = "60px";
    resultButton.style.height = "60px";

    resultButton.addEventListener('click', () => {
        tempNum = Number(stringNum);
        console.log(tempNum);
        return tempNum;
    });
    document.getElementById("function-button").appendChild(clearButton);
    document.getElementById("function-button").appendChild(sumButton);
    document.getElementById("function-button").appendChild(isOnOffButtons);
    /**
     * 숫자 버튼 생성
     */

    //button1
    const button1 = document.createElement('button');
    const num1 = button1.value = "1";
    button1.textContent = "1";
    button1.style.width = "60px";
    button1.style.height = "60px";


    //click event
    button1.addEventListener('click', () => {

        if(isOnOffState == true) {
            console.log(isOnOffState);
            if(sumButtonState == false) {
                console.log(sumButtonState);
                console.log(tempNum);
                stringNum += num1;
                tempNum = Number(stringNum);
            }
            else {
                tempNum += Number(num1);
            }
        }
        return tempNum;
    });
    document.getElementById("num-button-first-line").appendChild(button1);

    //button2
    const button2 = document.createElement('button');
    const num2 = button2.value = "2";
    button2.textContent = "2";
    button2.style.width = "60px";
    button2.style.height = "60px";


    //click event
    button2.addEventListener('click', () => {
        console.log(num2);
    });
    document.getElementById("num-button-first-line").appendChild(button2);
    
    //button3
    const button3 = document.createElement('button');
    const num3 = button3.value = "3";
    button3.textContent = "3";
    button3.style.width = "60px";
    button3.style.height = "60px";

    //click event
    button3.addEventListener('click', () => {
        console.log(num3);
    });
    document.getElementById("num-button-first-line").appendChild(button3);

    //button4
    const button4 = document.createElement('button');
    const num4 = button4.value = "4";
    button4.textContent = "4";
    button4.style.width = "60px";
    button4.style.height = "60px";
    
    //click event
    button4.addEventListener('click', () => {
        console.log(num4);
    });
    document.getElementById("num-button-second-line").appendChild(button4);

    
    //button5
    const button5 = document.createElement('button');
    const num5 = button5.value = "5";
    button5.textContent = "5";
    button5.style.width = "60px";
    button5.style.height = "60px";

    //click event
    button5.addEventListener('click', () => {
        console.log(num5);
    });
    document.getElementById("num-button-second-line").appendChild(button5);

    
    //button6
    const button6 = document.createElement('button');
    const num6 = button6.value = "6";
    button6.textContent = "6";
    button6.style.width = "60px";
    button6.style.height = "60px";
    

    //click event
    button6.addEventListener('click', () => {
        console.log(num6);
    });
    document.getElementById("num-button-second-line").appendChild(button6);

    
    //button7
    const button7 = document.createElement('button');
    const num7 = button7.value = "7";
    button7.textContent = "7";
    button7.style.width = "60px";
    button7.style.height = "60px";
    

    //click event
    button7.addEventListener('click', () => {
        console.log(num7);
    });
    document.getElementById("num-button-third-line").appendChild(button7);

    //button8
    const button8 = document.createElement('button');
    const num8 = button8.value = "8";
    button8.textContent = "8";
    button8.style.width = "60px";
    button8.style.height = "60px";
    

    //click event
    button8.addEventListener('click', () => {
        console.log(num8);
    });
    document.getElementById("num-button-third-line").appendChild(button8);

    //button9
    const button9 = document.createElement('button');
    const num9 = button9.value = "9";
    button9.textContent = "9";
    button9.style.width = "60px";
    button9.style.height = "60px";
    

    //click event
    button9.addEventListener('click', () => {
        console.log(num9);
    });
    document.getElementById("num-button-third-line").appendChild(button9);

    //button0
    const button0 = document.createElement('button');
    const num0 = button0.value = "0";
    button0.textContent = "0";
    button0.style.width = "60px";
    button0.style.height = "60px";
    

    //click event
    button0.addEventListener('click', () => {
        console.log(num0);
    });
    document.getElementById("num-button-last-line").appendChild(sosujumButton);
    document.getElementById("num-button-last-line").appendChild(button0);
    document.getElementById("num-button-last-line").appendChild(resultButton);
}
