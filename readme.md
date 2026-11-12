---
title: 20261112.md

---

---
title: Untitled

---

# 20261112作業製作
---

### 1 ASU 畫面

📷 **貼上 ASU 自動切圖後的畫面**（紅框／框選範圍）：

<!-- 在這裡貼圖 -->
![螢幕擷取畫面 2026-11-12 144949](https://hackmd.io/_uploads/BJKoZJQCGe.png)


✏️ 有沒有使用 **Split（剪刀）**？切了哪裡？為什麼？

> 無（填寫）

### 2 每個動作切了幾張

| 動作 | 資料夾 | 張數 | 順序是否正確 |
|---|---|---|---|
| 停止 stop | ✏️![stop](https://hackmd.io/_uploads/HyAgsAzCfx.png)
 | ✏️ | V 是 ☐ 否 |
| 走路 walk | ✏️![walk](https://hackmd.io/_uploads/r1fbs0GCfg.png)
 | ✏️ | V 是 ☐ 否 |
| 跑步 run | ✏️ | ✏️ | ☐ 是 ☐ 否 |
| 跳起來 jump | ✏️![jump](https://hackmd.io/_uploads/HJaA9CMAMe.png)
 | ✏️ | V 是 ☐ 否 |
| 發功 push | ✏️ ![attack](https://hackmd.io/_uploads/SkHeiRGRzl.png)
| ✏️ | ☐ 是 ☐ 否 |
| 特效 to | ✏️![0](https://hackmd.io/_uploads/HkT8oCfRGx.png)
 | ✏️ | V 是 ☐ 否 |

📷 **貼上其中一個動作匯出後的小圖**（例如 stop 資料夾內的 0.png～n.png）：

<!-- 在這裡貼圖 -->

### 暫停![5](https://hackmd.io/_uploads/BJ4nsRMAfg.png)


### 走路![4](https://hackmd.io/_uploads/rkijj0G0zg.png)


### 跳![7](https://hackmd.io/_uploads/HkqtoCz0Ml.png)


---

## 3. SpriteTracer 合併紀錄

> 順序提醒：**Settings 設透明 → Open（Shift 全選）→ Balance → Combine → 存檔**

📷 **貼上 Settings 勾選 Transparent 的畫面**：

<!-- 在這裡貼圖 -->

### 3-1 每個動作的合併過程

#### 動作：stop（停止）

📷 **Balance 前**（每張寬高不同）：

<!-- 在這裡貼圖 -->

📷 **Balance 後**（每張寬高相同）：

<!-- 在這裡貼圖 -->

📷 **Combine 後的長條圖**：

<!-- 在這裡貼圖 -->
![stop](https://hackmd.io/_uploads/rk-U2AzAMg.png)

#### 動作：walk（走路）

📷 **合併後的長條圖**：

<!-- 在這裡貼圖 -->
![walk](https://hackmd.io/_uploads/HyNmhCfRzg.png)


#### 動作：jump（跳起來）

📷 **合併後的長條圖**：

<!-- 在這裡貼圖 -->
![jump](https://hackmd.io/_uploads/S107h0G0zl.png)


#### 動作：push（發功）

📷 **合併後的長條圖**：

<!-- 在這裡貼圖 -->
![attack](https://hackmd.io/_uploads/HkuV3AGCGg.png)


#### 動作：to（特效）

📷 **合併後的長條圖**：

<!-- 在這裡貼圖 -->
![0](https://hackmd.io/_uploads/Hk6VhCzRGe.png)

> 其他動作（run、smile、fall、touch…）請自行複製上面的格式新增。

### 3-2 ⭐ 最重要：合併後的尺寸表

> 把滑鼠移到合併圖上可看到尺寸。**這張表就是下一步給 AI 的資料**。

| 動作 | 圖檔路徑（從 sketch.js 角度） | 總寬 | 高 | 張數 | 單格寬（總寬 ÷ 張數）(小數略) |
|---|---|---|---|---|---|
| stop | ✏️ "picture/stop.png"| ✏️1091 | ✏️ 165| ✏️8 | ✏️ 136|
| walk | ✏️"picture/walk.png" | ✏️ 1246| ✏️ 189| ✏️ 9| ✏️ 138|
| run | ✏️ | ✏️ | ✏️ | ✏️ | ✏️ |
| jump | ✏️"picture/jump.png" | ✏️ 1091| ✏️ 188| ✏️ 8| ✏️ |
| push | ✏️"picture/attack.png" | ✏️ 4015| ✏️248 | ✏️ 12| ✏️ 342|
| to | ✏️"picture/0.png" | ✏️ 93| ✏️ 203| ✏️ 1| ✏️ 93|

✏️ 檢查：單格寬是否為整數？（不是整數＝張數或寬度記錯了）

> （填寫）否(因圖片經個別化調整)

---

## 4. 與 AI 對話紀錄

> 每個步驟都要記錄：**我問了什麼、AI 產生什麼、結果如何**。
> 使用 `:::spoiler` 做下拉選單，內容多時更整齊。


#### 詢問AI_1
```tex!
我已至vscode 產生一p5.程式，幫我寫js.功能：產生一個全螢幕畫布，背景顏色128,128,128，做一個動畫，1.附圖檔案為程式中附檔picture\walk，其中(橫1240)橫向共9張圖片，按下鍵盤向右鍵時，向右移動，循環播放，按下鍵盤向左鍵時，向左移動，反向，循環播放，2.附圖檔案為程式中附檔picture\jump，其中(橫1091)橫向共8張圖片，按下鍵盤向上鍵時，向上移動(4張)，再向下移動(4張)，順序播放，3.附圖檔案為程式中附檔picture\attack，其中(橫4015)橫向共12張圖片，按下鍵盤向a鍵時，順序播放，並顯示附圖(附圖檔案為程式中附檔picture\0)，此附圖勻速移動，播放時不接受其他按鍵，4.除picture\0，未播放其他動畫時，播放(附圖檔案為程式中附檔picture\walk)，循環播放


```



#### 詢問AI_2

```tex!
當按下左時應左右鏡像，且全動畫大小如原圖

```

#### 詢問AI_程式碼_1
```javascript=
let walkSheet;
let jumpSheet;
let attackSheet;
let effectImage;

let playerX;
let playerY;

// 角色目前方向
// 1：向右，-1：向左
let playerDirection = 1;

// 動畫設定
let currentAction = "walk";

let walkFrame = 0;
let walkTimer = 0;
let walkSpeed = 8;

let jumpFrame = 0;
let jumpTimer = 0;
let jumpSpeed = 8;

let attackFrame = 0;
let attackTimer = 0;
let attackSpeed = 6;

let isAttacking = false;

let effectX;
let effectSpeed = 8;

function preload() {
  walkSheet = loadImage("picture/walk.png");
  jumpSheet = loadImage("picture/jump.png");
  attackSheet = loadImage("picture/attack.png");
  effectImage = loadImage("picture/0.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  imageMode(CENTER);

  playerX = width / 2;
  playerY = height / 2;

  effectX = playerX;
}

function draw() {
  background(128, 128, 128);

  // 攻擊期間不接受其他按鍵
  if (isAttacking) {
    playAttackAnimation();
    drawAttackEffect();
    return;
  }

  // 跳躍動畫
  if (currentAction === "jump") {
    playJumpAnimation();
    return;
  }

  // 左右移動
  if (keyIsDown(RIGHT_ARROW)) {
    playerX += 6;
    playerDirection = 1;
  }

  if (keyIsDown(LEFT_ARROW)) {
    playerX -= 6;
    playerDirection = -1;
  }

  // 防止角色超出畫面
  let currentFrameWidth = walkSheet.width / 9;
  playerX = constrain(
    playerX,
    currentFrameWidth / 2,
    width - currentFrameWidth / 2
  );

  // 沒有播放其他動畫時，循環播放 walk
  playWalkAnimation();
}

// ============================
// 顯示行走動畫
// walk：橫向 9 張
// 使用原圖每一格的實際大小
// ============================
function playWalkAnimation() {
  let frameWidth = walkSheet.width / 9;
  let frameHeight = walkSheet.height;

  walkTimer++;

  if (walkTimer >= walkSpeed) {
    walkTimer = 0;
    walkFrame++;

    if (walkFrame >= 9) {
      walkFrame = 0;
    }
  }

  let sourceX = walkFrame * frameWidth;

  drawSprite(
    walkSheet,
    sourceX,
    0,
    frameWidth,
    frameHeight,
    playerX,
    playerY,
    playerDirection
  );
}

// ============================
// 顯示跳躍動畫
// jump：橫向 8 張
// 前 4 張向上，後 4 張向下
// ============================
function playJumpAnimation() {
  let frameWidth = jumpSheet.width / 8;
  let frameHeight = jumpSheet.height;

  jumpTimer++;

  if (jumpTimer >= jumpSpeed) {
    jumpTimer = 0;
    jumpFrame++;

    if (jumpFrame >= 8) {
      jumpFrame = 0;
      currentAction = "walk";
    }
  }

  // 前 4 格向上
  if (jumpFrame < 4) {
    playerY -= 12;
  }
  // 後 4 格向下
  else {
    playerY += 12;
  }

  playerY = constrain(
    playerY,
    frameHeight / 2,
    height - frameHeight / 2
  );

  let sourceX = jumpFrame * frameWidth;

  drawSprite(
    jumpSheet,
    sourceX,
    0,
    frameWidth,
    frameHeight,
    playerX,
    playerY,
    playerDirection
  );
}

// ============================
// 顯示攻擊動畫
// attack：橫向 12 張
// ============================
function playAttackAnimation() {
  let frameWidth = attackSheet.width / 12;
  let frameHeight = attackSheet.height;

  attackTimer++;

  if (attackTimer >= attackSpeed) {
    attackTimer = 0;
    attackFrame++;

    if (attackFrame >= 12) {
      attackFrame = 0;
      isAttacking = false;
      currentAction = "walk";
    }
  }

  let sourceX = attackFrame * frameWidth;

  drawSprite(
    attackSheet,
    sourceX,
    0,
    frameWidth,
    frameHeight,
    playerX,
    playerY,
    playerDirection
  );
}

// ============================
// 繪製精靈圖
// 不指定縮放尺寸，使用原圖每格大小
// 左方時使用 scale(-1, 1) 鏡像
// ============================
function drawSprite(
  spriteSheet,
  sourceX,
  sourceY,
  sourceWidth,
  sourceHeight,
  x,
  y,
  direction
) {
  push();

  translate(x, y);

  // 左方向左右鏡像
  if (direction === -1) {
    scale(-1, 1);
  }

  image(
    spriteSheet,
    0,
    0,
    sourceWidth,
    sourceHeight,
    sourceX,
    sourceY,
    sourceWidth,
    sourceHeight
  );

  pop();
}

// ============================
// 顯示 picture/0
// 攻擊時向前方勻速移動
// 使用原圖大小
// ============================
function drawAttackEffect() {
  effectX += effectSpeed * playerDirection;

  push();

  translate(effectX, playerY);

  if (playerDirection === -1) {
    scale(-1, 1);
  }

  image(
    effectImage,
    0,
    0,
    effectImage.width,
    effectImage.height
  );

  pop();

  // 向右超出畫面
  if (playerDirection === 1 && effectX > width + effectImage.width) {
    effectX = playerX;
  }

  // 向左超出畫面
  if (playerDirection === -1 && effectX < -effectImage.width) {
    effectX = playerX;
  }
}

// ============================
// 鍵盤控制
// ============================
function keyPressed() {
  // 攻擊期間不接受任何按鍵
  if (isAttacking) {
    return false;
  }

  // 按 A 鍵播放攻擊
  if (key === "a" || key === "A") {
    isAttacking = true;
    currentAction = "attack";

    attackFrame = 0;
    attackTimer = 0;

    effectX = playerX + playerDirection * 50;

    return false;
  }

  // 按上方向鍵播放跳躍
  if (keyCode === UP_ARROW) {
    currentAction = "jump";

    jumpFrame = 0;
    jumpTimer = 0;

    return false;
  }

  // 按左鍵時面向左
  if (keyCode === LEFT_ARROW) {
    playerDirection = -1;
    return false;
  }

  // 按右鍵時面向右
  if (keyCode === RIGHT_ARROW) {
    playerDirection = 1;
    return false;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  playerX = constrain(playerX, 0, width);
  playerY = constrain(playerY, 0, height);
}

```

#### 詢問AI_3
```tex!
按上時，最高只需到角色高度3/2，且全部動畫間隔降低為原4/5
```


#### 詢問AI_4
```tex!
按a時，先隱藏0，撥放完a第5張再顯示
```

#### 詢問AI_5
```tex!
不按按鍵時且無撥放除左右動畫以外之動畫時撥放附圖檔案為程式中附檔picture\stop，其中(橫1091)橫向共8張圖片


```
#### 詢問AI_6
```tex!
依視窗寬度做等比例調整(設原預設寬度為4000，以此做調整)


```
#### 最終版
```javascript=
let walkSheet;
let stopSheet;
let jumpSheet;
let attackSheet;
let effectImage;

let playerX;
let playerY;

// ============================
// 基準設定
// ============================

// 設計基準寬度
const BASE_WIDTH = 4000;

// 角色方向：1 向右，-1 向左
let playerDirection = 1;

// 目前動作
let currentAction = "stop";

// ============================
// 動畫速度
// 間隔為原本的 4/5
// ============================
let walkFrame = 0;
let walkTimer = 0;
let walkSpeed = 6;

let stopFrame = 0;
let stopTimer = 0;
let stopSpeed = 6;

let jumpFrame = 0;
let jumpTimer = 0;
let jumpSpeed = 6;

let attackFrame = 0;
let attackTimer = 0;
let attackSpeed = 5;

// ============================
// 跳躍資料
// ============================
let jumpStartY;
let jumpHeight;

// ============================
// 攻擊資料
// ============================
let isAttacking = false;
let showEffect = false;

let effectX;
let effectSpeed = 8;


// ============================
// 取得縮放比例
// 以目前視窗寬度 / 4000 計算
// ============================
function getScaleFactor() {
  return width / BASE_WIDTH;
}


// ============================
// 載入圖片
// ============================
function preload() {
  walkSheet = loadImage("picture/walk.png");
  stopSheet = loadImage("picture/stop.png");
  jumpSheet = loadImage("picture/jump.png");
  attackSheet = loadImage("picture/attack.png");
  effectImage = loadImage("picture/0.png");
}


// ============================
// 初始化
// ============================
function setup() {
  createCanvas(windowWidth, windowHeight);

  imageMode(CENTER);

  playerX = width / 2;
  playerY = height / 2;

  effectX = playerX;
}


// ============================
// 主程式
// ============================
function draw() {
  background(128, 128, 128);

  let scaleFactor = getScaleFactor();

  // ============================
  // 攻擊動畫期間
  // ============================
  if (isAttacking) {
    playAttackAnimation(scaleFactor);

    if (showEffect) {
      drawAttackEffect(scaleFactor);
    }

    return;
  }

  // ============================
  // 跳躍動畫期間
  // ============================
  if (currentAction === "jump") {
    playJumpAnimation(scaleFactor);
    return;
  }

  // ============================
  // 左右移動
  // ============================
  let isMoving = false;

  // 以基準寬度換算移動速度
  let moveSpeed = 6 * scaleFactor;

  if (keyIsDown(RIGHT_ARROW)) {
    playerX += moveSpeed;
    playerDirection = 1;
    isMoving = true;
  }

  if (keyIsDown(LEFT_ARROW)) {
    playerX -= moveSpeed;
    playerDirection = -1;
    isMoving = true;
  }

  // walk 每格的原始寬度
  let walkFrameWidth = walkSheet.width / 9;

  // 角色顯示寬度依視窗寬度縮放
  let scaledWalkWidth = walkFrameWidth * scaleFactor;

  // 防止角色超出畫面
  playerX = constrain(
    playerX,
    scaledWalkWidth / 2,
    width - scaledWalkWidth / 2
  );

  // 按左右時播放行走動畫
  if (isMoving) {
    currentAction = "walk";
    playWalkAnimation(scaleFactor);
  }
  // 沒有按左右時播放停止動畫
  else {
    currentAction = "stop";
    playStopAnimation(scaleFactor);
  }
}


// ============================
// 行走動畫
// walk.png：橫向 9 張
// ============================
function playWalkAnimation(scaleFactor) {
  let frameWidth = walkSheet.width / 9;
  let frameHeight = walkSheet.height;

  walkTimer++;

  if (walkTimer >= walkSpeed) {
    walkTimer = 0;
    walkFrame++;

    if (walkFrame >= 9) {
      walkFrame = 0;
    }
  }

  let sourceX = walkFrame * frameWidth;

  drawSprite(
    walkSheet,
    sourceX,
    0,
    frameWidth,
    frameHeight,
    playerX,
    playerY,
    playerDirection,
    scaleFactor
  );
}


// ============================
// 停止動畫
// stop.png：橫向 8 張
// ============================
function playStopAnimation(scaleFactor) {
  let frameWidth = stopSheet.width / 8;
  let frameHeight = stopSheet.height;

  stopTimer++;

  if (stopTimer >= stopSpeed) {
    stopTimer = 0;
    stopFrame++;

    if (stopFrame >= 8) {
      stopFrame = 0;
    }
  }

  let sourceX = stopFrame * frameWidth;

  drawSprite(
    stopSheet,
    sourceX,
    0,
    frameWidth,
    frameHeight,
    playerX,
    playerY,
    playerDirection,
    scaleFactor
  );
}


// ============================
// 跳躍動畫
// jump.png：橫向 8 張
// 前 4 張向上，後 4 張向下
// 最高距離為角色高度的 3/2
// ============================
function playJumpAnimation(scaleFactor) {
  let frameWidth = jumpSheet.width / 8;
  let frameHeight = jumpSheet.height;

  jumpTimer++;

  if (jumpTimer >= jumpSpeed) {
    jumpTimer = 0;
    jumpFrame++;
  }

  // 前 4 格向上
  if (jumpFrame < 4) {
    let progress = (jumpFrame + 1) / 4;

    playerY = jumpStartY - jumpHeight * progress;
  }

  // 後 4 格向下
  else if (jumpFrame < 8) {
    let progress = (jumpFrame - 4 + 1) / 4;

    playerY = jumpStartY - jumpHeight * (1 - progress);
  }

  // 跳躍完成
  if (jumpFrame >= 8) {
    jumpFrame = 0;
    jumpTimer = 0;

    playerY = jumpStartY;
    currentAction = "stop";
  }

  let sourceX = jumpFrame * frameWidth;

  drawSprite(
    jumpSheet,
    sourceX,
    0,
    frameWidth,
    frameHeight,
    playerX,
    playerY,
    playerDirection,
    scaleFactor
  );
}


// ============================
// 攻擊動畫
// attack.png：橫向 12 張
// ============================
function playAttackAnimation(scaleFactor) {
  let frameWidth = attackSheet.width / 12;
  let frameHeight = attackSheet.height;

  attackTimer++;

  if (attackTimer >= attackSpeed) {
    attackTimer = 0;
    attackFrame++;

    // 第 5 張播放完後顯示 picture/0
    if (attackFrame >= 5) {
      showEffect = true;
    }
  }

  // 攻擊完成
  if (attackFrame >= 12) {
    attackFrame = 0;
    attackTimer = 0;

    isAttacking = false;
    showEffect = false;
    currentAction = "stop";
  }

  let sourceX = attackFrame * frameWidth;

  drawSprite(
    attackSheet,
    sourceX,
    0,
    frameWidth,
    frameHeight,
    playerX,
    playerY,
    playerDirection,
    scaleFactor
  );
}


// ============================
// 繪製精靈圖
// 依視窗寬度等比例縮放
// ============================
function drawSprite(
  spriteSheet,
  sourceX,
  sourceY,
  sourceWidth,
  sourceHeight,
  x,
  y,
  direction,
  scaleFactor
) {
  push();

  translate(x, y);

  if (direction === -1) {
    scale(-1, 1);
  }

  image(
    spriteSheet,
    0,
    0,
    sourceWidth * scaleFactor,
    sourceHeight * scaleFactor,
    sourceX,
    sourceY,
    sourceWidth,
    sourceHeight
  );

  pop();
}


// ============================
// picture/0 攻擊特效
// ============================
function drawAttackEffect(scaleFactor) {
  effectX += effectSpeed * scaleFactor * playerDirection;

  push();

  translate(effectX, playerY);

  if (playerDirection === -1) {
    scale(-1, 1);
  }

  image(
    effectImage,
    0,
    0,
    effectImage.width * scaleFactor,
    effectImage.height * scaleFactor
  );

  pop();

  // 特效超出畫面後停止
  let effectWidth = effectImage.width * scaleFactor;

  if (
    playerDirection === 1 &&
    effectX > width + effectWidth / 2
  ) {
    effectX = width + effectWidth / 2;
  }

  if (
    playerDirection === -1 &&
    effectX < -effectWidth / 2
  ) {
    effectX = -effectWidth / 2;
  }
}


// ============================
// 鍵盤控制
// ============================
function keyPressed() {
  // 攻擊期間不接受其他按鍵
  if (isAttacking) {
    return false;
  }

  let scaleFactor = getScaleFactor();

  // 按 A 鍵攻擊
  if (key === "a" || key === "A") {
    isAttacking = true;
    currentAction = "attack";

    attackFrame = 0;
    attackTimer = 0;

    // 按 A 時先隱藏 picture/0
    showEffect = false;

    // 特效從角色前方開始
    effectX = playerX + playerDirection * 50 * scaleFactor;

    return false;
  }

  // 按上方向鍵跳躍
  if (keyCode === UP_ARROW) {
    if (currentAction !== "jump") {
      currentAction = "jump";

      jumpFrame = 0;
      jumpTimer = 0;

      // 記錄跳躍起點
      jumpStartY = playerY;

      // 跳躍最高距離為角色高度的 3/2
      jumpHeight = jumpSheet.height * 3 / 2 * scaleFactor;
    }

    return false;
  }

  // 按左鍵時面向左
  if (keyCode === LEFT_ARROW) {
    playerDirection = -1;
    return false;
  }

  // 按右鍵時面向右
  if (keyCode === RIGHT_ARROW) {
    playerDirection = 1;
    return false;
  }
}


// ============================
// 視窗大小改變
// ============================
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  playerX = constrain(playerX, 0, width);
  playerY = constrain(playerY, 0, height);
}


```