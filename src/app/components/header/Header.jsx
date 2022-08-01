import React from 'react'
import Button from '../button/Button'

const Header = () => {
  return (
    <header className="header">
			<div className="container">
				<nav className="header__nav">
					<div className="header__logo">
						<div className="header__logo-image"></div>
						<p className="header__logo-title">TESTTASK</p>
					</div>
					<div className="header__button-container">
            <Button value="Users" id="users"/>
            <Button value="Sign in" id="sign-in"/>
					</div>
				</nav>
			</div>
			<div className="header__main">
				<div className="sub-container">
					<div className="header__main-container">
						<h1 className="header__title">Test assignment for front-end developer</h1>
						<p className="header__description">
							What defines a good front-end developer is one that has skilled knowledge
							of HTML, CSS, JS with a vast understanding of User design thinking as
							they'll be building web interfaces with accessibility in mind. They
							should also be excited to learn, as the world of Front-End Development
							keeps evolving.
						</p>
            <Button  value="Sign up" id="sign-up"/>
					</div>
				</div>
			</div>
		</header>
  )
}

export default Header
