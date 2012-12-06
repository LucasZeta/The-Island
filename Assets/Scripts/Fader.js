#pragma strict

var loadingGUI : GUITexture;

function Start() {
	guiTexture.pixelInset = Rect(
		-Screen.width * 0.5,
		-Screen.height * 0.5,
		Screen.width,
		Screen.height
	);
}

function LoadAnimation() {
	Instantiate(loadingGUI);
}