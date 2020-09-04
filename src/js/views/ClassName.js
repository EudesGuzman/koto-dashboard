import React from "react";

export const ClassName = () => {
	return (
		<div>
			<table>
				<thead>
					<tr>
						<th />

						<th colSpan="2">Anthony</th>

						<th colSpan="2">Lione</th>
					</tr>

					<tr>
						<th scope="col">Fecha</th>

						<th>L1</th>

						<th>L2</th>

						<th>L3</th>

						<th>L4</th>
						<th>L1</th>

						<th>L2</th>

						<th>L3</th>

						<th>L4</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<th>15/07</th>

						<td>$200,00</td>

						<td>$50,00</td>

						<td>$0</td>

						<td>$0</td>
					</tr>

					<tr>
						<th>28/07</th>

						<td>$0,00</td>

						<td>$100,00</td>

						<td>$100,00</td>

						<td>$0,00</td>
					</tr>

					<tr>
						<th>09/08</th>

						<td>$0,00</td>

						<td>$50,00</td>

						<td>$0,00</td>

						<td>$80,00</td>
					</tr>

					<tr>
						<th>22/08</th>

						<td>$40,00</td>

						<td>$0,00</td>

						<td>$0,00</td>

						<td>$110,00</td>
					</tr>

					<tr>
						<th>25/08</th>

						<td>$0,00</td>

						<td>$20,00</td>

						<td>$0,00</td>

						<td>$0,00</td>
					</tr>
				</tbody>

				<tfoot>
					<tr>
						<th>Balance</th>

						<td colSpan="2">$20,00</td>

						<td colSpan="2">$10,00</td>
					</tr>
				</tfoot>
			</table>
		</div>
	);
};
