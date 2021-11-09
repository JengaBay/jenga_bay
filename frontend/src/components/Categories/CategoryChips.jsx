import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import CategoryList from "./CategoryList";

const CategoryChips = () => {
    return(
    <Flex ml="200px" mt={5} mb={5}>
        {CategoryList.map((category) =>
        
            (<Button key={category.id} mr={10} borderRadius="30px" size="sm" variant="outline">{category.value}</Button>)
        )}
    </Flex>
    )
}

export default CategoryChips;