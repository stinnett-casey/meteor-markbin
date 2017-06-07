import { Meteor } from 'meteor/meteor';
import { Bins } from '../imports/collections/bins';

Meteor.startup(() => {
  Meteor.publish('bins', function(){
    return Bins.find({ ownerId: this.userId });
  });

    //find the bins with a sharedWith array that has an element
    // that is equal to this email
  Meteor.publish('sharedBins', function(){
    const user = Meteor.users.findOne(this.userId);

    if (!user) { return; }

    const email = user.emails[0].address; // get the first email

    return Bins.find({
      sharedWith: { $elemMatch: { $eq: email }}
    });
  });
});
