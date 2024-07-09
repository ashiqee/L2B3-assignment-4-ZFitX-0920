
interface TTagTitle{
    tagTitle:string;
}

const TagTitle = ({tagTitle}:TTagTitle) => {
    return (
        <h4 className="text-primary text-xl font-medium uppercase">
            {tagTitle}
        </h4>
    );
};

export default TagTitle;