#pragma strict

static private var charge : int = 0;

private var numPowerCells : int = 4;
private var hasMatches : boolean = false;

var collectSound : AudioClip;
var hudCharge : Texture2D[];
var hudChargeGUI : GUITexture;
var matchGUI : GUITexture;
var generatorCharge : Texture2D[];
var generator : Renderer;

var textHints : GUIText;

static function GetCharge() {
	return charge;
}

function CellPickup() {
	AudioSource.PlayClipAtPoint(collectSound, transform.position);
	charge++;
	
	enableHUD();
	hudChargeGUI.texture = hudCharge[charge];
	generator.material.mainTexture = generatorCharge[charge];
	
	if(charge == numPowerCells) {
		GameObject.FindGameObjectWithTag('OutPost').SendMessage('UnlockDoor');
	}
}

function MatchboxPickup() {
	AudioSource.PlayClipAtPoint(collectSound, transform.position);
	
	hasMatches = true;
	matchGUI.enabled = true;
}

function enableHUD() {
	if(! hudChargeGUI.enabled) {
		hudChargeGUI.enabled = true;
	}
}

function OnControllerColliderHit(collider : ControllerColliderHit) {
	if(collider.gameObject.name == 'campfire') {
		if(hasMatches) {
			if(matchGUI) {
				LightFire(collider.gameObject);
				Destroy(matchGUI);
			}
		}
		else {
			textHints.SendMessage('ShowHint', 'Looks like I could use this to sign for help\nIf only I could light it...');
		}
	}
}

function LightFire(inflamable : GameObject) {
	inflamable.GetComponentInChildren(ParticleSystem).Play();
	inflamable.audio.Play();
}