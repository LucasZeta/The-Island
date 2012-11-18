#pragma strict

var projectile : Rigidbody;
var throwSound : AudioClip;
var throwSpeed : float = 30.0f;

function Update () {
	if(Input.GetButtonDown('Fire1')) {
		audio.PlayOneShot(throwSound);
		
		var newProjectile : Rigidbody = Instantiate(projectile, transform.position, transform.rotation);
		newProjectile.name = 'coconut';
		newProjectile.velocity = transform.forward * throwSpeed;
		
		Physics.IgnoreCollision(transform.root.collider, newProjectile.collider, true);
	}
}