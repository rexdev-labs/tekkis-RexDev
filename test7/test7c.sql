SELECT concat(customer.first_name,' ',customer.last_name) AS fullName, SUM(sum) AS  totalSpentMonay FROM `customer` INNER JOIN `order` ON order.fk_customer=customer.id  GROUP BY fullName
