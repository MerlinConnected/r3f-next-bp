import React, { Suspense } from 'react'

export default function Layout({ children }) {
	return (
		<>
			<Suspense fallback={null}>
				<div>
					<main>{children}</main>
				</div>
			</Suspense>
		</>
	)
}
