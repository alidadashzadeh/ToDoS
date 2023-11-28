import styles from "./Homepage.module.css";

import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Homepage() {
	return (
		<div className={styles.homepage}>
			<header>
				<Navbar />
				<div className={styles.container}>
					<div className={styles.header__container__inner}>
						<h1>sort things out with one click</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum vero
							quis provident sint praesentium dignissimos hic officiis placeat
							eum voluptate ad fugit dolorum molestias soluta aut, quia illum
							nemo unde.Lorem ipsum dolor sit amet consectetur, adipisicing.
						</p>
						<Link to="/app">start your free trial</Link>
					</div>
				</div>
			</header>
			<section className={styles.container}>
				<h2>some random heading</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
					quos ullam dolore ipsam perspiciatis quas nam aliquid quo aspernatur
					expedita esse tenetur minus iusto quisquam tempore illum sapiente
					quam, laborum quidem beatae. Nobis neque, minus doloribus eos harum
					quaerat, praesentium provident maxime magnam vitae magni ipsum totam
					excepturi aliquam soluta pariatur dignissimos non molestias ducimus
					itaque ullam quis voluptatem facere exercitationem! Debitis, suscipit.
					Ex natus sed minus vero dolore recusandae officiis quisquam modi,
					dolorum exercitationem numquam. Repellat illum quibusdam aliquid
					laudantium omnis? Eius, dolores a aperiam quo sapiente aspernatur
					similique, incidunt accusantium ducimus laudantium fuga laboriosam
					corporis ipsum voluptatem eos!
				</p>
			</section>
			<footer className={styles.container}>
				<p>Copyright © 2023 by Ali D. All rights reserved. </p>
			</footer>
		</div>
	);
}

export default Homepage;
