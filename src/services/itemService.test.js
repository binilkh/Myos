import { getItems, getOrder, insertOrder } from "./itemService";

test("getItems", async()=>{
    const getItem= await getItems();
})
test("getItems", async()=>{
    const getOrd= await getOrder();
})
test("getItems", async()=>{
    const getIns= await insertOrder();
})