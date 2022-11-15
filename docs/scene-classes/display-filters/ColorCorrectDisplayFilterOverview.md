A ColorCorrectDisplayFilter modifies the color of an image buffer. There are six color correct operations that are applied in this order: 
1. exposure 
2. saturation 
3. contrast 
4. gamma 
5. offset
6. multiply 

If you wish to apply these operations in any other order, you may string together a series of ColorCorrectDisplayFilters, with each performing a single color correct operation.