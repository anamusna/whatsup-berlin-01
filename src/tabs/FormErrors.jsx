import React from 'react';

export const FormErrors = ({ formErrors }) => (
	<div className="text-center">
		{Object.keys(formErrors).map((fieldName, i) => {
			if (formErrors[fieldName].length > 0) {
				return (
					<b key={i} style={{ color: 'red' }}>
						<span>
							-- {fieldName} {formErrors[fieldName]} --
						</span>
					</b>
				);
			} else {
				return '';
			}
		})}
	</div>
);
