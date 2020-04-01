FROM centos:7

RUN yum -y update && yum clean all
RUN yum -y install java-1.8.0

COPY springboot-angularjs*.jar /home/app.jar
COPY entrypoint.sh /home

RUN chmod +x /home/entrypoint.sh

ENTRYPOINT ["/home/entrypoint.sh"]
