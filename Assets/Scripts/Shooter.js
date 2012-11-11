var bullet : Rigidbody;
var power : float = 1500;
var moveSpeed : float = 5;

function Start () {

}

function Update () {
	var h : float = Input.GetAxis('Horizontal') * Time.deltaTime * moveSpeed;
	var v : float = Input.GetAxis('Vertical') * Time.deltaTime * moveSpeed;
	
	transform.Translate(h, v, 0);
	
	if (Input.GetButtonUp('Fire1')) {
		var fwd : Vector3 = transform.TransformDirection(Vector3.forward);
		
		var instance : Rigidbody = Instantiate(bullet, transform.position, transform.rotation);
		instance.AddForce(fwd * power);
	}
}