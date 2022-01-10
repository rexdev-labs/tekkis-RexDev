SELECT order.order_nr, COUNT() AS numberOrder FROM `order` INNER JOIN `order_item` ON order.id=order_item.fk_order GROUP BY order.order_nr  HAVING COUNT() >= 2
