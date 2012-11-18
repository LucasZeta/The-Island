#pragma strict

static private var charge : int = 0;

var collectSound : AudioClip;
var hudCharge : Texture2D[];
var hudChargeGUI : GUITexture;
var generatorCharge : Texture2D[];
var generator : Renderer;

static function GetCharge() {
	return charge;
}

function CellPickup() {
	AudioSource.PlayClipAtPoint(collectSound, transform.position);
	charge++;
	
	enableHUD();
	hudChargeGUI.texture = hudCharge[charge];
	generator.material.mainTexture = generatorCharge[charge];
}

function enableHUD() {
	if(! hudChargeGUI.enabled) {
		hudChargeGUI.enabled = true;
	}
}