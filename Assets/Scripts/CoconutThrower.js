#pragma strict

var throwSound : AudioClip;
var projectile : Rigidbody;

function Update () {
	if(Input.GetButtonDown('Fire1')) {
		audio.PlayOneShot(throwSound);
		
		var newProjectile : Rigidbody = Instantiate(projectile, transform.position, transform.rotation);
	}
}