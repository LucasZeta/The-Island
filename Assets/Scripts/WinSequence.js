#pragma strict

var fader : GUITexture;
var winSequence : GameObject;
var winClip : AudioClip;

function GameOver() {
	AudioSource.PlayClipAtPoint(winClip, transform.position);
	
	var winSequenceObject : GameObject = Instantiate(winSequence);
	yield new WaitForSeconds(8.0);
	
	Destroy(winSequenceObject);
	Instantiate(fader);
}