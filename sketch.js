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