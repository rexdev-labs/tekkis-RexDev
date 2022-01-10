SELECT concat(customer.first_name,' ',customer.last_name) as fullName, COUNT(*) AS  numberOrder FROM `customer` INNER JOIN `order` ON order.fk_customer=customer.id  GROUP BY fullName
