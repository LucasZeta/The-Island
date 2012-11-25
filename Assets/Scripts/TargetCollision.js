#pragma strict

private var beenHit : boolean = false;
private var targetRoot : Animation;

var hitSound : AudioClip;
var resetSound : AudioClip;
var resetTime : float = 3.0f;

function Start() {
	targetRoot = transform.parent.transform.parent.animation;
}

function OnCollisionEnter(collision : Collision) {
	if((!beenHit) && collision.gameObject.name == 'coconut') {
		StartCoroutine('targetHit');
	}
}

function targetHit() {
	audio.PlayOneShot(hitSound);
	targetRoot.Play('down');
	beenHit = true;
	CoconutWin.targets++;
	
	yield new WaitForSeconds(resetTime);
	
	audio.PlayOneShot(resetSound);
	targetRoot.Play('up');
	beenHit = false;
	CoconutWin.targets--;
}

@script RequireComponent(AudioSource)