import React from 'react'
import Chart from './Chart'

const ChartInterface = ({ posts, postValues }) => {
    // First Chart
    let sortByViews = posts.slice();
    sortByViews.sort((a, b) => a.Views - b.Views);

    // Second Chart
    let combinedPosts = posts.reduce((acc, curr) => {
        // Group Post objects by display name and add 'AverageInteractions' attribute
        const found = acc.find(a => a.Displayname === curr.Displayname);
        const interactions = curr.Likes + curr.Comments + curr.Views;
        
        if (!found) {
            acc.push({
              Displayname: curr.Displayname, 
              Interactions: interactions,
              PostCount: 1,
              AverageInteractions: interactions
              });
        } else {
            found.Interactions += interactions;
            found.PostCount += 1
            found.AverageInteractions = found.Interactions / found.PostCount
        }
        return acc;
    }, []);
    let sortByInteractions = combinedPosts.slice().sort((a, b) => a.AverageInteractions - b.AverageInteractions);

    // Third Chart
    let combinedPostValues = postValues.reduce((acc, curr) => {
        // Group PostValue objects by Brand Name and add 'AverageMentionValue' attribute
        const found = acc.find(a => a.BrandName === curr.BrandName);
        
        if (!found) {
            acc.push({
                BrandName: curr.BrandName,
                MentionValue: curr.MentionValue,
                PostCount: 1,
                AverageMentionValue: +curr.MentionValue.toFixed(2)
            })
        } else {
            found.MentionValue += curr.MentionValue;
            found.PostCount += 1;
            found.AverageMentionValue = +(found.MentionValue / found.PostCount).toFixed(2);
        }
        return acc;
    }, []);
    let sortByMentionValue = combinedPostValues.slice().sort((a, b) => a.AverageMentionValue - b.AverageMentionValue);

    return (
        <div style={{textAlign: "center"}}>
            <Chart label={"Top 5 Posts by Views"} sortedPosts={sortByViews} xAxis={"Displayname"} dataKey={"Views"} />
            <Chart label={"Top 5 Display Names by Average Interactions"} sortedPosts={sortByInteractions} xAxis={"Displayname"} dataKey={"AverageInteractions"} />
            <Chart label={"Top 5 Brand Names by Average Mention Value"} sortedPosts={sortByMentionValue} xAxis={"BrandName"} dataKey={"AverageMentionValue"} />
        </div>
    )
}

export default ChartInterface;