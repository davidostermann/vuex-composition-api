import { ref } from "@vue/composition-api";
import { useState, useActions } from 'vuex-composition-helpers';

function tagsFuncs() {

    const {tags} = useState(['tags'])

    console.log('tags :: ', tags.value)
    const {updateTags} = useActions(['updateTags'])

    const newTag = ref("");

    const remove = tag => {
        updateTags(tags.value.filter(t => t !== tag));
    };

    const reverse = () => {
        updateTags(tags.value.reverse());
    };

    const addTag = () => {
        if (newTag.value.trim().length === 0 || tags.value.includes(newTag.value)) {
            return;
        }
        updateTags([...tags.value, newTag.value.trim()]);
        newTag.value = "";
    };

    const handleBackspace = () => {
        if (newTag.value.length === 0) {
            updateTags(tags.value.slice(0, -1));
        }
    };

    return {
        tags,
        newTag,
        remove,
        reverse,
        addTag,
        handleBackspace
    };
}

export default tagsFuncs;
