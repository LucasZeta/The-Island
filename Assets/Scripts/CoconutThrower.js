#pragma strict

var throwSound : AudioClip;

function Update () {
	if(Input.GetButtonDown('Fire1')) {
		audio.PlayOneShot(throwSound);
	}
}