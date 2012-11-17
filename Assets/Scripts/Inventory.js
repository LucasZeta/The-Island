#pragma strict

static private var charge : int = 0;
var collectSound : AudioClip;
var hudCharge : Texture2D[];
var chargeHudGUI : GUITexture;

static function GetCharge() {
	return charge;
}

function CellPickup() {
	AudioSource.PlayClipAtPoint(collectSound, transform.position);
	charge++;
	
	chargeHudGUI.texture = hudCharge[charge];
}