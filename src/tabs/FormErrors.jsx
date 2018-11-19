import React from 'react';

export const FormErrors = ({ formErrors }) => (
	<div className="text-center">
		{Object.keys(formErrors).map((fieldName, i) => {
			if (formErrors[fieldName].length > 0) {
				return (
					<p key={i} style={{ color: 'red' }}>
						{fieldName} {formErrors[fieldName]}
					</p>
				);
			} else {
				return '';
			}
		})}
	</div>
);
