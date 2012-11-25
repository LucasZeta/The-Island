#pragma strict

private var beenHit : boolean = false;
private var targetRoot : Animation;

var hitSound : AudioClip;
var resetSound : AudioClip;
var resetTime : float = 3.0f;

function Start() {
	targetRoot = transform.root.FindChild('target').animation;
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
	
	yield new WaitForSeconds(resetTime);
	audio.PlayOneShot(resetSound);
	targetRoot.Play('up');
	beenHit = false;
}