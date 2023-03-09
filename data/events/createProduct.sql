INSERT INTO [dbo].[Product]
    ( 
      [productName],
      [price]
    )
VALUES 
    (     
        @productName,
        @price
    )

SELECT SCOPE_IDENTITY() AS productID