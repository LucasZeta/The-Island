#pragma strict

function Start() {
	guiTexture.pixelInset = Rect(
		-Screen.width * 0.5,
		-Screen.height * 0.5,
		Screen.width,
		Screen.height
	);
}