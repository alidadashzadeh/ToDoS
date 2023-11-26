import styles from "./Pricing.module.css";

import Navbar from "../components/Navbar";

function Pricing() {
	return (
		<div className={styles.pricing}>
			<Navbar />
			<div className={styles.plan}>
				<div>Annual</div>
				<div>Monthly</div>
			</div>
			<div className={styles.saving}>Save up to 24% with annual plans</div>
			<ul className={styles.cards}>
				<li>
					<h2 className={styles.center}>Free </h2>
					<p className={styles.center}>Unlimited ToDoS, delete functionalit </p>
					<h1 className={styles.center}>Free</h1>
					<button> create a free account</button>
					<ul>
						<li>
							<span class="material-symbols-outlined">task_alt</span>
							<p>generate ToDoS indefinitely</p>
						</li>
						<li>
							<span class="material-symbols-outlined">task_alt</span>
							<p>delete functionality</p>
						</li>
						<li>
							<span class="material-symbols-outlined">task_alt</span>
							<p>Mobile App</p>
						</li>
					</ul>
				</li>
				<li>
					<h5 className={styles.center}>MOST POPULAR</h5>
					<h2 className={styles.center}>Essentials </h2>
					<p className={styles.center}>Edit functionality, assign deadlines </p>
					<h1 className={styles.center}>$19</h1>
					<button> Start a free trial </button>
					<p>
						<strong>All the free plan features plus:</strong>
					</p>
					<ul>
						<li>
							<span class="material-symbols-outlined">task_alt</span>
							<p>add ToDoS forever</p>
						</li>
						<li>
							<span class="material-symbols-outlined">task_alt</span>
							<p>Edit ToDoS</p>
						</li>
						<li>
							<span class="material-symbols-outlined">task_alt</span>
							<p> specify deadlines </p>
						</li>
					</ul>
				</li>
				<li>
					<h2 className={styles.center}>Bussiness </h2>
					<p className={styles.center}>AI power tool, unlimited history </p>
					<h1 className={styles.center}>$49</h1>
					<button> Start a free trial</button>
					<p>
						<strong> All the Essential plan features plus:</strong>
					</p>
					<ul>
						<li>
							<span class="material-symbols-outlined">task_alt</span>
							<p>use AI power to analyse your concerns</p>
						</li>
						<li>
							<span class="material-symbols-outlined">task_alt</span>
							<p>keep track of ToDoS</p>
						</li>
						<li>
							<span class="material-symbols-outlined">task_alt</span>
							<p>multiple devices accessibility</p>
						</li>
					</ul>
				</li>
				<li>
					<h2 className={styles.center}>Enterprise </h2>
					<p className={styles.center}>
						For teams that require more capabilities including integration like
						AI tool and API
					</p>
					<h1 className={styles.center}>lets talk</h1>
					<button> Contact sales</button>
					<p>
						<strong>All the Bussiness plan features plus:</strong>
					</p>
					<ul>
						<li>
							<span class="material-symbols-outlined">task_alt</span>
							<p>use AI power to analyse your concerns</p>
						</li>
						<li>
							<span class="material-symbols-outlined">task_alt</span>
							<p>keep track of ToDoS</p>
						</li>
						<li>
							<span class="material-symbols-outlined">task_alt</span>
							<p>multiple devices accessibility</p>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	);
}

export default Pricing;
